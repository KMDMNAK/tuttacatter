import { db } from 'tuttacatter/db'
import { Db } from 'mongodb'
import { AuthModuleProvider } from 'tuttacatter/modules/auth'
import { UserModel } from 'tuttacatter/models/user'

describe('auth module', () => {
    let collectionsP: ReturnType<typeof db.getCollections>
    let authModuleProvider: AuthModuleProvider
    beforeEach(async () => {
        const originalDb = await db.dbP
        await originalDb.dropDatabase()
    })
    
    beforeEach(async () => {
        collectionsP = db.getCollections()
        authModuleProvider = new AuthModuleProvider(collectionsP)
    })
    it('register user', async () => {
        const user1 = await authModuleProvider.registerUser("test1", "password")
        const data1 = user1.data()
        expect(data1).toHaveProperty('account', 'test1')
        expect(data1).toHaveProperty('password', 'password')

        const user2 = await authModuleProvider.registerUser("test2", "password")
        const data2 = user2.data()
        expect(data2).toHaveProperty('account', 'test2')
        expect(data2).toHaveProperty('password', 'password')
    })
    it('register user using same account', async () => {
        await authModuleProvider.registerUser("test1", "password")
        expect(() => authModuleProvider.registerUser("test1", "password")).rejects.toThrowError()
    })

    it('login User', async () => {
        const registeredCredentials = await authModuleProvider.registerUser('test1', 'password')
        const userCredentials = await authModuleProvider.getUserCredentials('test1')
        expect(registeredCredentials).not.toBeNull()
        expect(userCredentials).not.toBeNull()
        expect(registeredCredentials).toEqual(userCredentials)
    })

    it('decoded token', async () => {
        const credentials = await authModuleProvider.registerUser('test1', 'password')
        if (!credentials) return
        const token = await authModuleProvider.loginUser(credentials)
        const verifiedUser = await authModuleProvider.verifyAccessToken(token)
        expect(verifiedUser).not.toBeNull()
        if (!verifiedUser) return
        const userData = verifiedUser.data()
        const credentialsData = credentials.data()
        expect(userData._id).toBe(credentialsData.userId)
        expect(userData.credentialsId).toStrictEqual(credentialsData._id)
    })
})
