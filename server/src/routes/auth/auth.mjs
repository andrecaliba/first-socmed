import { Router } from 'express';

const router = Router();

router.get('/api/check-auth', (req, res) => {
  if (req.session.user) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

export default router;