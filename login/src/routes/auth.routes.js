//autenticacion login, register
import {Router} from 'express';
const router = Router()

import * as authCtrl from '../controllers/auth.controller'
import {verifySignup} from '../middlewares'

router.post('/signup', [verifySignup.checkDuplicateUserNmeOrEmail, verifySignup.checkRolesExisted], authCtrl.signUp)
router.post('/signin', authCtrl.signin)

export default router;