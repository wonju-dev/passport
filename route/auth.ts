import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post('/local', passport.authenticate('local', { session: false }), (req, res) => {
  res.json(req.user);
});

router.get('/github', (req, res) => {
  console.log('github');
});

export default router;
