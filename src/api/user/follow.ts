import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { followUser, unfollowUser } from '../../modules/user'
import { ConfirmUserLocals } from '../../middleware/user'
import { VerifyUserLocals } from '../../middleware/auth'

export const FollowUserHandler: RequestHandler<
    ParamsDictionary,
    API.User.Follow.ResponseBody,
    API.User.Follow.RequestBody,
    any,
    ConfirmUserLocals & VerifyUserLocals
> = async (req, res, next) => {
    const { targetUser, user } = res.locals
    try {
        await followUser({ user, targetUser })
        return res.send(true)
    } catch (err) {
        next(err)
    }
}


export const UnfollowUserHandler: RequestHandler<
    ParamsDictionary,
    API.User.Follow.ResponseBody,
    API.User.Follow.RequestBody,
    any,
    ConfirmUserLocals & VerifyUserLocals
> = async (req, res, next) => {
    const { targetUser, user } = res.locals
    try {
        await unfollowUser({ user, targetUser })
        return res.send(true)
    } catch (err) {
        next(err)
    }
}
