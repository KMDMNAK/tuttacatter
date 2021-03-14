import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { likeUser, unlikeUser } from '../../modules/user'
import { ConfirmUserLocals } from '../../middleware/user'
import { VerifyUserLocals } from '../../middleware/auth'

export const LikeUserHandler: RequestHandler<
    ParamsDictionary,
    API.User.Like.ResponseBody,
    API.User.Like.RequestBody,
    any,
    ConfirmUserLocals & VerifyUserLocals
> = async (req, res, next) => {
    const { targetUser, user } = res.locals
    try {
        await likeUser({ user, targetUser })
        return res.send(true)
    } catch (err) {
        next(err)
    }
}


export const UnlikeUserHandler: RequestHandler<
    ParamsDictionary,
    API.User.Like.ResponseBody,
    API.User.Like.RequestBody,
    any,
    ConfirmUserLocals & VerifyUserLocals
> = async (req, res, next) => {
    const { targetUser, user } = res.locals
    try {
        await unlikeUser({ user, targetUser })
        return res.send(true)
    } catch (err) {
        next(err)
    }
}