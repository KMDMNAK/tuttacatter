import express from 'express'

import supertest from 'supertest'

import { db } from 'tuttacatter/db'
import { Db } from 'mongodb'

import { UserModuleProvider } from 'tuttacatter/modules/user'
import { AuthModuleProvider } from 'tuttacatter/modules/auth'

import { VerifyMiddleware } from 'tuttacatter/middlewares'
import { UserModel } from 'tuttacatter/models'

describe('user module', () => {
    let collectionsP: ReturnType<typeof db.getCollections>
    let userModule: UserModuleProvider
    let authModule: AuthModuleProvider
    beforeEach(async () => {
        const originalDb = await db.dbP
        await originalDb.dropDatabase()
    })
    const _app = express()
    _app.use('/auth', Auth())
    const app = supertest(_app)

}