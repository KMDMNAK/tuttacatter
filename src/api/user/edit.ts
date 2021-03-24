import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { UserModule } from '../../modules'
import { VerifyUserLocals } from '../../middlewares/auth'

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
            return res.send({ err: 'PostId is not providen.' })
        }
        if (!newBody) {
            return res.send({ err: 'Empty new body.' })
        }
        const post = await UserModule.getPost(postId)
        if (!post) {
            res.status(404)
            return res.send({ err: "Not Found." })
        }
        if (user.id !== post.data().userId) {
            res.status(400)
            return res.send({ err: 'Invalid Operation' })
        }
        await UserModule.editPost(post, newBody)
        return res.send({ body: newBody })
    } catch (err) {
        next(err)
    }
}

