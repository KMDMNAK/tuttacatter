import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { PostLocals } from '../../middlewares/post'
import { ViewModule } from '../../modules'

const handler: RequestHandler<
    API.View.Post.Params,
    API.View.Post.ResponseBody,
    any,
    any,
    PostLocals
> = async (req, res, next) => {
    const { post } = res.locals
    if (!post) {
        res.status(404)
        return res.send({ err: `Post does not exists.` })
    }
    try {
        const postToSend = await ViewModule.convertPostToSend(post)
        return res.send({ post: postToSend })
    } catch (err) {
        next(err)
    }
}

export default handler