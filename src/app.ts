import app from './api'
import auth from './api/auth'
import view from './api/view'
import user from './api/user'

import { ConfirmUserMiddlewareByQuery } from './middlewares/user'
import { VerifyMiddleware } from './middlewares/auth'

import { connectDB } from './db'
import { DB_HOST, DB_NAME, DB_PORT } from './env'
import { createDatabaseMiddleware } from './middlewares/db'

const bootstrap = async () => {
    const db = await connectDB(DB_HOST, DB_NAME)

    const App = app(
        auth(),
        view(ConfirmUserMiddlewareByQuery),
        user(VerifyMiddleware)
    )

    App.listen(DB_PORT, () => {
        console.debug(`Server starts at ${DB_PORT}`)
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