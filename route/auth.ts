import express from 'express';

const router = express.Router();

router.post('/local', (req, res) => {
  console.log('local');
});

router.get('/github', (req, res) => {
  console.log('github');
});

export default router;
