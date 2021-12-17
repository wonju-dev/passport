import express from 'express';
import passport from 'passport';

const router = express.Router();

router.post('/local', passport.authenticate('local', { session: false }), (req, res) => {
  res.json(req.user);
});

router.get('/github', passport.authenticate('github', { session: false }));
router.get('/callback', passport.authenticate('github', { session: false }), (req, res) => {
  res.json(req.user);
});

export default router;
