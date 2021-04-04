import connect from 'connect'
import { RequestHandler } from 'express-serve-static-core'


export const combineMiddlewares = (...middlewares: RequestHandler[]) => {
    const server = connect()
    middlewares.forEach((middleware) => {
        server.use(middleware as connect.NextHandleFunction)
    })
    return server
}