import supertest from 'supertest'
import express from 'express'

import Auth from 'tuttacatter/api/auth'

import { db } from 'tuttacatter/db'

const REGISTER_ROUTE = '/auth/register'
describe('check auth api', () => {
    beforeEach(async () => {
        const originalDb = await db.dbP
        await originalDb.dropDatabase()
    })
    const _app = express()
    _app.use('/auth', Auth())
    const app = supertest(_app)

    it('register user', async () => {
        const postData: API.Register.RequestBody = {
            account: "test_account",
            password: "test_password",
            userInfo: {}
        }
        const res = await app.post(REGISTER_ROUTE).send(postData)
        const body = res.body as API.Register.ResponseBody
        expect(res.status).toBe(200)
        expect(body.token).not.toBeNull()
    })

    it('register user with depricated account', async () => {
        const postData: API.Register.RequestBody = {
            account: "test_account",
            password: "test_password",
            userInfo: {}
        }
        await app.post(REGISTER_ROUTE).send(postData)
        const res = await app.post(REGISTER_ROUTE).send(postData)
        expect(res.status).toBe(400)
    })
})