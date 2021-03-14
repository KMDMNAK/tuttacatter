import express, { Router } from "express"
const app = express()
const api = Router()

import AuthRouter from './auth'
import ViewRouter from './view'
import UserRouter from './user'

api.use('/auth', AuthRouter)
api.use('/view', ViewRouter)
api.use('/user', UserRouter)

app.use(express.json())
app.use('/api', api)
export default app
