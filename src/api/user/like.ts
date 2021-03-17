import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { UserModule } from '../../modules'
import { ConfirmUserLocals } from '../../middlewares/user'
import { VerifyUserLocals } from '../../middlewares/auth'

export const LikeUserHandler: RequestHandler<
    ParamsDictionary,
    API.User.Like.ResponseBody,
    API.User.Like.RequestBody,
    any,
    VerifyUserLocals
> = async (req, res, next) => {
    const { user } = res.locals
    const { postId } = req.body
    try {
        const model = await UserModule.likePost(user, postId)
        if (!model) return res.status(404)
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
    VerifyUserLocals
> = async (req, res, next) => {
    const { user } = res.locals
    const { postId } = req.body
    try {
        const model = await UserModule.unlikePost(user, postId)
        if (!model) return res.status(404)
        return res.send(true)
    } catch (err) {
        next(err)
    }
}