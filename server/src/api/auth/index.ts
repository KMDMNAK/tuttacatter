import { Router, json } from 'express'

import Register from './register'
import Login from './login'

const createRouter = () => {
    const router = Router()
    router.use(json())
    router.post('/register', Register)
    router.post('/login', Login)
    return router
}
export default createRouter