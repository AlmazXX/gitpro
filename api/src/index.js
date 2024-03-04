import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { EXPRESS_PORT } from "./config/config.js";
import { CLIENT_URL } from "./constants.js";
import reposRouter from "./routes/repos.js";
import userRouter from "./routes/users.js";

const app = express();
app.use(cors({ credentials: true, origin: CLIENT_URL }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);
app.use("/api/repos", reposRouter);

app.listen(EXPRESS_PORT, function () {
  console.log("We are listening port %d", EXPRESS_PORT);
});
