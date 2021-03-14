import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { post } from '../../modules/user'
import { ConfirmUserLocals } from '../../middleware/user'
import { VerifyUserLocals } from '../../middleware/auth'

export const PostHandler: RequestHandler<
    ParamsDictionary,
    API.User.Post.ResponseBody,
    Partial<API.User.Post.RequestBody>,
    any,
    VerifyUserLocals
> = async (req, res, next) => {
    const { newBody } = req.body
    const { user } = res.locals
    try {
        if (!newBody) {
            res.status(400)
            return res.send('No body is providen')
        }
        const postModel = await post(user, newBody)
        return res.send(true)
    } catch (err) {
        next(err)
    }
}

