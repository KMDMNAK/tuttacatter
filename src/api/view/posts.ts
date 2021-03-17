import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { existsAccount, getUserPosts, convertPostsToSend } from '../../modules/view'

const handler: RequestHandler<
    ParamsDictionary,
    API.User.Posts.ResponseBody,
    any,
    API.User.Posts.Query,
    Middleware.UserConfirmLocals
> = async (req, res, next) => {
    const { user } = res.locals
    const { page } = req.query
    const posts = await getUserPosts(user, page || 0)
    try {
        const postsToSend = await convertPostsToSend(posts)
        res.send(postsToSend)
    } catch (err) {
        next(err)
    }
}

export default handler