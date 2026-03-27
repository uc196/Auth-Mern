import express from 'express';
import { 
  register, 
  login, 
  logout, 
  verifyAccount, 
  requestPasswordReset, 
  resetPassword 
} from '../controllers/auth.js';

const authRouter = express.Router();

// Auth routes
authRouter.post('/register', register);
authRouter.post('/login', login);
authRouter.post('/logout', logout);

// Email verification
authRouter.get('/verify/:token', verifyAccount);

// Password reset
authRouter.post('/request-password-reset', requestPasswordReset);
authRouter.post('/reset-password/:token', resetPassword);

export default authRouter;