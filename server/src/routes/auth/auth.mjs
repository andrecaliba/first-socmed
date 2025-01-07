import { Router } from 'express';

const router = Router();

router.get('/api/check-auth', (req, res) => {
  console.log("Session: ", req.session);
  console.log("Session user: ", req.session.user);
  console.log("Session visited: ", req.session.visited);
  if (req.session.user) {
    res.json({ authenticated: true });
  } else {
    res.json({ authenticated: false });
  }
});

export default router;