import { Router } from "express";
import UserService from "../services/users.js";

const userRouter = Router();
const userService = new UserService();

userRouter.get("/callback", userService.authorize);

userRouter.get("/me", userService.getSelf);

userRouter.patch("/me", userService.updateSelf);

userRouter.delete("/me", userService.unauthorize);

userRouter.get("/search", userService.searchUsers);

export default userRouter;
