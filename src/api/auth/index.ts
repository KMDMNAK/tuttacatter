import { Router } from 'express'

import Register from './register'
import Login from './login'

const router = Router()

router.post('/register', Register)
router.post('/login', Login)

export default router