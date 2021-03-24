
import { Collections } from '../db'
import { UserCollection as UserCollectionType } from '../models/user'
import { sign, verify } from 'jsonwebtoken'
import { ObjectId } from 'mongodb'
import { SECRET_TOKEN_KEY } from '../env'
import { UserCredentialsModel } from 'tuttacatter/models/usercredentials'

import { BaseModuleProvider } from './provider'

type DecodedToken = { userId: string }
class TokenHandler {
    getToken(credentials: UserCredentialsModel) {
        const { userId } = credentials.data()
        if (!userId) throw Error('No user id provided.')
        const token = sign({ userId: userId } as DecodedToken, SECRET_TOKEN_KEY);
        return token
    }
    async getUserId(token: string) {
        const { userId } = verify(token, SECRET_TOKEN_KEY) as DecodedToken
        return userId
    }
}

export class AuthModuleProvider extends BaseModuleProvider {
    tokenHandler: TokenHandler
    constructor(collections: Promise<Collections>) {
        super(collections)
        const collectionsP = this.collectionsP
        this.tokenHandler = new TokenHandler()
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
        return this.tokenHandler.getToken(credentials)
    }

    async verifyAccessToken(token: string) {
        const { User } = await this.collectionsP
        const userId = await this.tokenHandler.getUserId(token)
        const user = await User.findOneById(userId)
        if (!user) {
            console.debug(`${userId} does not exist.`)
            return null
        }
        return user
    }
}
