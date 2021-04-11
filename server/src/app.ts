import app from './api'
import auth from './api/auth'
import view from './api/view'
import user from './api/user'

import { VerifyMiddleware, ConfirmAccountMiddleware, PostMiddleware } from './middlewares'

import { connectDB } from './db'
import { DB_HOST, DB_NAME, SERVER_PORT } from './env'
import { createDatabaseMiddleware } from './middlewares'


const bootstrap = async () => {
    const db = await connectDB(DB_HOST, DB_NAME)

    const App = app(
        auth(),
        view(ConfirmAccountMiddleware, PostMiddleware),
        user(VerifyMiddleware)
    )

    App.listen(SERVER_PORT, () => {
        console.debug(`Server starts at ${SERVER_PORT}`)
    })
}

bootstrap()
    .then(v => {
        console.debug('Server successfully started!')
    })
    .catch(e => {
        console.debug('Server failed.')
        console.error(e)
    })