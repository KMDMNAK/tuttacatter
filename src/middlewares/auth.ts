import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import AuthModule from '../modules/auth'
import { UserModel } from '../models/user'

export interface VerifyUserLocals {
    user: UserModel
}

export const VerifyMiddleware: RequestHandler<
    ParamsDictionary,
    any,
    any,
    Query,
    Partial<VerifyUserLocals>
> = async (req, res, next) => {
    const token = req.header("auth-token");
    if(!token){
        res.status(400)
        return res.send('No token is providen.')
    }
    const user = await AuthModule.verifyAccessToken(token)
    if (!user) {
        res.status(400)
        return res.send(`Invalid Access Token.`)
    }
    res.locals.user = user
    return next()
}
