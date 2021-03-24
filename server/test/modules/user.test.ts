import { db } from 'tuttacatter/db'
import { Db } from 'mongodb'

import { UserModuleProvider } from 'tuttacatter/modules/user'
import { AuthModuleProvider } from 'tuttacatter/modules/auth'

import { VerifyMiddleware } from 'tuttacatter/middlewares/auth'
import { UserModel } from 'tuttacatter/models/user'

describe('user module', () => {
    let collectionsP: ReturnType<typeof db.getCollections>
    let userModule: UserModuleProvider
    let authModule: AuthModuleProvider

    beforeEach(async () => {
        const originalDb = await db.dbP
        await originalDb.dropDatabase()
    })
    beforeEach(async () => {
        collectionsP = db.getCollections()
        userModule = new UserModuleProvider(collectionsP)
        authModule = new AuthModuleProvider(collectionsP)
    })
    it('follow user', async () => {
        const user = await authModule.registerUser("test", "password")
        const targetUser = await authModule.registerUser("test_target", "password_")
        userModule.followUser({ user, targetUser })
    })
})