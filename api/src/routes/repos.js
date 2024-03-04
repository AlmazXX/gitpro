import { Router } from "express";
import RepoService from "../services/repos.js";

const reposRouter = Router();
const repoService = new RepoService();

reposRouter.get("/own", repoService.getOwnRepos);

reposRouter.get("/", repoService.getRepos);

export default reposRouter;
