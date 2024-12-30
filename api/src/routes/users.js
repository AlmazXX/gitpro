import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { exceptionHandler } from '../middlewares/exception-handler.js';
import { UserService } from '../services/users.js';

export const userRouter = Router();
const userService = new UserService();

userRouter.get('/callback', userService.authorize, exceptionHandler);

userRouter.get('/me', auth, userService.getSelf, exceptionHandler);

userRouter.patch('/me', auth, userService.updateSelf, exceptionHandler);

userRouter.delete('/me', auth, userService.unauthorize, exceptionHandler);

userRouter.get('/search', auth, userService.searchUsers, exceptionHandler);
