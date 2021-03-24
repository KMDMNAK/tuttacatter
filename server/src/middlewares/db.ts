import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { Collections } from '../db'

export type DatabaseMiddleware = RequestHandler<ParamsDictionary, any, any, Query, Partial<Collections>>
export const createDatabaseMiddleware = (collections: Collections): DatabaseMiddleware => {
    const DatabaseMiddleware: RequestHandler<
        ParamsDictionary,
        any,
        any,
        Query,
        Partial<Collections>
    > = (req, res, next) => {
        Object.assign(res.locals, collections)
        return next()
    }
    return DatabaseMiddleware
}