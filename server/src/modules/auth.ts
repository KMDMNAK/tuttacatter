
import { Collections } from '../db'
import { sign, verify } from 'jsonwebtoken'
import { UserCredentialsModel } from 'tuttacatter/models/usercredentials'

import { BaseModuleProvider } from './provider'

import { generateKeyPairSync, RSAKeyPairKeyObjectOptions, KeyObject } from 'crypto'


class KeyProvider {
    private static key: KeyObject
    private static generateKey() {
        const { privateKey } = generateKeyPairSync("rsa", {
            modulusLength: 2048,
            publicKeyEncoding: {
                type: 'spki',
                format: 'pem'
            },
            privateKeyEncoding: {
                format: 'pem',
                type: 'pkcs1'
            }
        } as RSAKeyPairKeyObjectOptions)
        return privateKey
    }
    static get() {
        if (!this.key) {
            this.key = this.generateKey()
        }
        return this.key
    }
}

type DecodedToken = { userId: string }
class TokenHandler {
    getToken(credentials: UserCredentialsModel) {
        const { userId } = credentials.data()
        if (!userId) throw Error('No user id provided.')
        const secretKey = String(KeyProvider.get())
        const token = sign({ userId: userId } as DecodedToken, secretKey, { algorithm: 'RS256' });
        return token
    }
    async getUserId(token: string) {
        const secretKey = String(KeyProvider.get())
        const { userId } = verify(token, secretKey, { algorithms: ['RS256'] }) as DecodedToken
        return userId
    }
}

export class AuthModuleProvider extends BaseModuleProvider {
    tokenHandler: TokenHandler
    constructor(collections: Promise<Collections>) {
        super(collections)
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
