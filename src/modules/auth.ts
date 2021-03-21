
import { Collections } from '../db'
import { UserCollection as UserCollectionType } from '../models/user'
import { sign, verify } from 'jsonwebtoken'
import { SECRET_TOKEN_KEY } from '../env'
import { UserCredentialsModel } from 'tuttacatter/models/usercredentials'

import { BaseModuleProvider } from './provider'

type DecodedToken = { userId: string }
class TokenHandler {
    UserCollection: UserCollectionType
    constructor(UserCollection: UserCollectionType) {
        this.UserCollection = UserCollection
    }
    getToken(credentials: UserCredentialsModel) {
        const { userId } = credentials.data()
        if (!userId) throw Error('No user id provided.')
        const token = sign({ userId: userId } as DecodedToken, SECRET_TOKEN_KEY);
        return token
    }
    async getUser(token: string) {
        try {
            const { userId } = verify(token, SECRET_TOKEN_KEY) as DecodedToken
            const user = await this.UserCollection.findOneById(userId)
            if (!user) {
                console.debug(`${userId} does not exist.`)
                return null
            }
            return user
        } catch (e) {
            return null
        }
    }
}

export class AuthModuleProvider extends BaseModuleProvider {
    tokenHandlerP: Promise<TokenHandler>
    constructor(collections: Promise<Collections>) {
        super(collections)
        const collectionsP = this.collectionsP
        this.tokenHandlerP = (async () => {
            const collections = await collectionsP
            const tokenHandler = new TokenHandler(collections.User)
            return tokenHandler
        })()
    }

    invalidPassword(password: string): boolean {
        return false
    }
    
    async existsAccount(account: string): Promise<boolean> {
        const collections = await this.collectionsP
        const credentials = await collections.UserCredentials.findByUserAccount(account)
        return !!credentials
    }

    async getUserCredentials(account: string): Promise<UserCredentialsModel | null> {
        const collections = await this.collectionsP
        const credentials = await collections.UserCredentials.findByUserAccount(account)
        return credentials
    }

    async verifyUserPassword(credentials: UserCredentialsModel, password: string) {
        // TODO handle hash password
        const data = credentials.data()
        return password === data.password
    }

    async registerUser(
        account: string, password: string
    ) {
        const collections = await this.collectionsP
        const userDoc = await collections.User.createDocument({ _id: account })
        const credentialsDoc = await collections.UserCredentials.createDocument({
            userId: userDoc.id,
            account,
            password
        })
        const infoDoc = await collections.UserInfo.createDocument({
            userId: userDoc.id
        })
        const res = await userDoc.update({
            credentialsId: credentialsDoc.id,
            infoId: infoDoc.id
        })
        return credentialsDoc
    }

    async loginUser(credentials: UserCredentialsModel) {
        const tokenHandler = await this.tokenHandlerP
        return tokenHandler.getToken(credentials)
    }

    async verifyAccessToken(token: string) {
        const tokenHandler = await this.tokenHandlerP
        const user = await tokenHandler.getUser(token)
        return user
    }
}
