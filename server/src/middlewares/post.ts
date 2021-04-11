import { RequestHandler, ParamsDictionary, Query } from 'express-serve-static-core'
import { ObjectID, ObjectId } from 'mongodb'
import { PostModel } from '../models/post'

import { ViewModule } from '../modules'

export interface PostLocals {
    post: PostModel
}

export const PostMiddleware: RequestHandler<
    { postId: string, account: string },
    any,
    any,
    Query,
    Partial<PostLocals>
> = async (req, res, next) => {
    // TODO use account
    const { postId } = req.params
    if (!postId) {
        res.status(400)
        return res.send('No postId is providen.')
    }
    console.debug('postId', { postId })
    const post = await ViewModule.getPost(new ObjectID(postId))
    if (!post) {
        res.status(404)
        return res.send('No post exists.')
    }
    res.locals.post = post
    next()
}