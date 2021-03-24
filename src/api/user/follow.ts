import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { UserModule } from '../../modules'
import { ConfirmUserLocals } from '../../middlewares/user'
import { VerifyUserLocals } from '../../middlewares/auth'

export const FollowUserHandler: RequestHandler<
    ParamsDictionary,
    API.User.Follow.ResponseBody,
    API.User.Follow.RequestBody,
    any,
    ConfirmUserLocals & VerifyUserLocals
> = async (req, res, next) => {
    const { targetUser, user } = res.locals
    try {
        await UserModule.followUser({ user, targetUser })
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
        await UserModule.unfollowUser({ user, targetUser })
        return res.send(true)
    } catch (err) {
        next(err)
    }
}
