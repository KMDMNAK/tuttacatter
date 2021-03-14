import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { invalidAccessToken } from '../modules/auth'
import { UserModel } from '../model/user'

export interface VerifyUserLocals {
    user: UserModel
}

export const VerifyMiddleware: RequestHandler<
    ParamsDictionary,
    any,
    any,
    Query,
    Partial<VerifyUserLocals>
> = (req, res, next) => {
    const token = {}
    const user = invalidAccessToken(token)
    if (!user) {
        res.status(400)
        return res.send(`Invalid Access Token.`)
    }
    res.locals.user = user
    return next()
}
