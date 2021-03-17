import express, { Router } from "express"
const app = express()
const api = Router()

import authRouter from './auth'
import viewRouter from './view'
import userRouter from './user'

const createApp = (
    AuthRouter: ReturnType<typeof authRouter>,
    ViewRouter: ReturnType<typeof viewRouter>,
    UserRouter: ReturnType<typeof userRouter>,
) => {
    api.use('/auth', AuthRouter)
    api.use('/view', ViewRouter)
    api.use('/user', UserRouter)
    
    app.use('/api', api)
    return app
}

export default createApp
