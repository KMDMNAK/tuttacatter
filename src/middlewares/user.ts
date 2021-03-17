import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'

import { UserModel } from '../models/user'
import { combineMiddlewares } from './utils'
import { getUser } from '../modules/user'

export interface ConfirmUserLocals {
    targetUser: UserModel
}

const ConfirmUserMiddleware: RequestHandler<
    ParamsDictionary,
    any,
    { userId?: string },
    any,
    { userId: string } & Partial<ConfirmUserLocals>
> = async (req, res, next) => {
    const userId = res.locals.userId
    if (!userId) {
        res.status(400)
        return res.send(`User Id not providen.`)
    }
    const user = getUser(userId)
    if (!user) {
        res.status(404)
        return res.send(`User does not exists.`)
    }

    res.locals.targetUser = user as any
    return next()
}

const UserIdFromQueryMiddleware: RequestHandler<
    ParamsDictionary,
    any,
    any,
    { userId?: string },
    { userId: string }
> = async (req, res, next) => {
    const userId = req.query.userId
    if (!userId) {
        res.status(400)
        res.send('No UserId params providen.')
        return
    }
    res.locals.userId = userId
    return next()
}

const UserIdFromBodyMiddleware: RequestHandler<
    ParamsDictionary,
    any,
    { userId?: string },
    any,
    { userId: string }
> = async (req, res, next) => {
    const userId = req.body.userId
    if (!userId) {
        res.status(400)
        res.send('No UserId params providen.')
        return
    }
    res.locals.userId = userId
    return next()
}

export const ConfirmUserMiddlewareByBody = combineMiddlewares(UserIdFromBodyMiddleware, ConfirmUserMiddleware)
export const ConfirmUserMiddlewareByQuery = combineMiddlewares(UserIdFromQueryMiddleware, ConfirmUserMiddleware)
