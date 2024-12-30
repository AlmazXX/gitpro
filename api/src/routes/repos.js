import { Router } from 'express';
import { auth } from '../middlewares/auth.js';
import { exceptionHandler } from '../middlewares/exception-handler.js';
import { RepoService } from '../services/repos.js';

export const reposRouter = Router();
const repoService = new RepoService();

reposRouter.get('/own', auth, repoService.getOwnRepos, exceptionHandler);

reposRouter.get('/', auth, repoService.getRepos, exceptionHandler);
