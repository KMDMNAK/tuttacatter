import supertest from 'supertest'

import App from 'tuttacatter/api'

const REGISTER_ROUTE = '/api/auth/register'
describe('check auth api', () => {
    let app: supertest.SuperTest<supertest.Test>
    beforeEach(() => {
        app = supertest(App)
    })
    
    it('register user', async () => {
        const postData: API.Register.RequestBody = {
            account: "test_account",
            password: "test_password",
            userInfo: {}
        }
        const res = await app.post(REGISTER_ROUTE).send(postData)
        expect(res.status).toBe(200)
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