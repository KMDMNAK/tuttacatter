import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { PostModel } from '../models/post'

import { ViewModule } from '../modules'

export interface PostLocals {
    post: PostModel
}

export const PostMiddleware: RequestHandler<
    { postId: string },
    any,
    any,
    Query,
    Partial<PostLocals>
> = async (req, res, next) => {
    const { postId } = req.params
    if (!postId) {
        res.status(400)
        return res.send('No postId is providen.')
    }
    const post = await ViewModule.getPost(postId)
    if (!post) {
        res.status(404)
        return res.send('No post exists.')
    }
    res.locals.post = post
}