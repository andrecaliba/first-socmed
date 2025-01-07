import { Router } from 'express';
import registerRouter from './registration/register.mjs';

const router = Router();
router.use(registerRouter);

export default router;