import { Router } from 'express'
import { ConfirmUserMiddlewareByQuery } from '../../middleware/user'

const router = Router()
router.get('/post', ConfirmUserMiddlewareByQuery)
router.get('/posts', ConfirmUserMiddlewareByQuery)
router.get('/info', ConfirmUserMiddlewareByQuery)

export default router