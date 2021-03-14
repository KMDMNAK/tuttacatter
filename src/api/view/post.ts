import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { getPostById, convertPostToSend } from '../../modules/view'

const handler: RequestHandler<
    ParamsDictionary,
    API.User.Post.ResponseBody,
    any,
    API.User.Post.Query
> = async (req, res, next) => {
    const { postId } = req.query
    const post = await getPostById(postId)
    if (!post) {
        res.status(404)
        return res.send(`Post does not exists.`)
    }
    try {
        const postToSend = await convertPostToSend(post)
        res.send(postToSend)
    } catch (err) {
        next(err)
    }
}

export default handler