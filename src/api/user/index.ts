import { Router } from 'express'

import { VerifyMiddleware } from '../../middleware/auth'

import { FollowUserHandler, UnfollowUserHandler } from './follow'
import { LikeUserHandler, UnlikeUserHandler } from './like'
import { PostHandler } from './post'
import { EditPostHandler } from './edit'

const router = Router()

router.put('/follow', VerifyMiddleware, FollowUserHandler)
router.put('/unfollow', VerifyMiddleware, UnfollowUserHandler)

router.put('/like', VerifyMiddleware, LikeUserHandler)
router.put('/unlike', VerifyMiddleware, UnlikeUserHandler)

router.patch('/edit', VerifyMiddleware, EditPostHandler)

router.post('/post', VerifyMiddleware, PostHandler)
export default router