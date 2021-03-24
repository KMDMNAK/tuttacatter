import { Router } from 'express'

import { ConfirmAccountMiddleware as ConfirmAccountMiddlewareType, PostMiddleware as PostMiddlewareType } from '../../middlewares'
import PostHandler from './post'
import PostsHandler from './posts'
import InfoHandler from './info'

const createRouter = (
    ConfirmAccountMiddleware: typeof ConfirmAccountMiddlewareType,
    PostMiddleware: typeof PostMiddlewareType
) => {
    const router = Router()
    router.get('/post/:account/:postId', PostMiddleware, PostHandler)
    router.get('/posts/:account', ConfirmAccountMiddleware, PostsHandler)
    router.get('/info/:account', ConfirmAccountMiddleware, InfoHandler)
    return router
}
export default createRouter