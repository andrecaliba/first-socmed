import { Router } from 'express';

const router = Router();

router.post('/api/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      return res.status(500).json({ errors: [{ msg: 'Failed to destroy session' }] });
    }
    res.clearCookie('connect.sid'); // Clear the session cookie
    res.json({ msg: 'Logout successful' });
  });
});

export default router;