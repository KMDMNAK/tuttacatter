import { Router } from 'express'
import { ConfirmUserMiddlewareByQuery as BaseConfirmUserMiddlewareByQuery } from '../../middlewares/user'

const createRouter = (ConfirmUserMiddlewareByQuery: typeof BaseConfirmUserMiddlewareByQuery) => {
    const router = Router()
    router.get('/post', ConfirmUserMiddlewareByQuery)
    router.get('/posts', ConfirmUserMiddlewareByQuery)
    router.get('/info', ConfirmUserMiddlewareByQuery)
    return router
}
export default createRouter