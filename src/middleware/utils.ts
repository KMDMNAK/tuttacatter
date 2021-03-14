import connect from 'connect'

export const combineMiddlewares = (...middlewares: RequestHandler[]) => {
    const server = connect()
    middlewares.forEach((middleware) => {
        server.use(middleware as connect.NextHandleFunction)
    })
    return server
}