import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { editPost } from '../../modules/user'
import { VerifyUserLocals } from '../../middleware/auth'

export const EditPostHandler: RequestHandler<
    Partial<API.User.Edit.Params>,
    API.User.Edit.ResponseBody,
    API.User.Edit.RequestBody,
    any,
    VerifyUserLocals
> = async (req, res, next) => {
    const { user } = res.locals
    const { newBody } = req.body
    const { postId } = req.params

    try {
        if (!postId) {
            res.status(400)
            return res.send('PostId is not providen.')
        }
        if (!newBody) {
            return res.send(true)
        }
        await editPost(postId, newBody)
        return res.send(true)
    } catch (err) {
        next(err)
    }
}

