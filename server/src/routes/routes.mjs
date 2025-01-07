import { Router } from 'express';
import registerRouter from './registration/register.mjs';
import loginRouter from './login/login.mjs';
import logoutRouter from './logout/logout.mjs';
import authRouter from './auth/auth.mjs';

const router = Router();
router.use(registerRouter);
router.use(loginRouter);
router.use(authRouter);
router.use(logoutRouter);

export default router;