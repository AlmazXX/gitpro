import cookieParser from "cookie-parser";
import cors from "cors";
import express from "express";
import { EXPRESS_PORT } from "./config/config.js";
import userRouter from "./routes/users.js";

const app = express();
app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", userRouter);

app.listen(EXPRESS_PORT, function () {
  console.log("We are listening port %d", EXPRESS_PORT);
});
