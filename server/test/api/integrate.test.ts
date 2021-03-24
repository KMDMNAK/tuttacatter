import supertest from 'supertest'
import express from 'express'

import Auth from 'tuttacatter/api/auth'
import User from 'tuttacatter/api/user'
import View from 'tuttacatter/api/view'

import { ConfirmAccountMiddleware, PostMiddleware, VerifyMiddleware } from 'tuttacatter/middlewares'

import { db } from 'tuttacatter/db'


const REGISTER_ROUTE = '/auth/register'
const POST_ROUTE = '/user/post'
const LIKE_ROUTE = '/user/like'
const VIEW_POST_ROUTE = '/view/post'

describe('check auth api', () => {
    beforeEach(async () => {
        const originalDb = await db.dbP
        await originalDb.dropDatabase()
    })
    const _app = express()
    _app.use('/auth', Auth())
    _app.use('/user', User(VerifyMiddleware))
    _app.use('/view', View(ConfirmAccountMiddleware, PostMiddleware))
    const app = supertest(_app)

    it('post and view', async () => {
        const postData: API.Register.RequestBody = {
            account: "test_account",
            password: "test_password",
            userInfo: {}
        }
        let res = await app.post(REGISTER_ROUTE).send(postData)
        const bodyRegister = res.body as API.Register.ResponseBody
        if (!bodyRegister.token) throw Error()
        res = await app.post(POST_ROUTE).set('auth-token', bodyRegister.token).send({ newBody: 'TEST_BODY' } as API.User.Post.RequestBody)
        expect(res.status).toBe(200)
        const bodyPost = res.body as API.User.Post.ResponseBody
        expect(bodyPost.res?.body).toBe('TEST_BODY')

        res = await app.get(`${VIEW_POST_ROUTE}/test/${bodyPost.res?._id}`).set('auth-token', bodyRegister.token)
        const bodyViewPost = res.body as API.View.Post.ResponseBody
        expect(res.status).toBe(200)
        expect(bodyViewPost.body).toBe("TEST_BODY")
    })

    it.skip('like other user', async () => {
        const postData: API.Register.RequestBody = {
            account: "test_account",
            password: "test_password",
            userInfo: {}
        }
        const res = await app.post(REGISTER_ROUTE).send(postData)
        expect(res.status).toBe(400)
    })
})