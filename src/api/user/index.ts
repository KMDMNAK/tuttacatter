import { Router } from 'express'

import { VerifyMiddleware as BaseVerifyMiddleware } from '../../middlewares/auth'

import { FollowUserHandler, UnfollowUserHandler } from './follow'
import { LikeUserHandler, UnlikeUserHandler } from './like'
import { PostHandler } from './post'
import { EditPostHandler } from './edit'


const createRouter = (
    VerifyMiddleware: typeof BaseVerifyMiddleware
): Router => {
    const router = Router()
    router.put('/follow', VerifyMiddleware, FollowUserHandler)
    router.put('/unfollow', VerifyMiddleware, UnfollowUserHandler)

    router.put('/like', VerifyMiddleware, LikeUserHandler)
    router.put('/unlike', VerifyMiddleware, UnlikeUserHandler)

    router.patch('/edit', VerifyMiddleware, EditPostHandler)

    router.post('/post', VerifyMiddleware, PostHandler)
    return router
}

export default createRouter