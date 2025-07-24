import express from 'express';
import { login, profile, register, createPlaylist } from '../../../controllers/user-controller.js';
const router = express.Router();
router.get('/profile', profile);
router.post('/login', login);
router.post('/register', register);
router.post('/:userId/playlist', createPlaylist);

export default router;
