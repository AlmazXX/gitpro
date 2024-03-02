import axios from "axios";
import { Router } from "express";
import { CLIENT_ID, CLIENT_SECRET } from "../config/config.js";
import {
  GITHUB_ACCESS_TOKEN,
  GITHUB_ACCESS_TOKEN_REQUEST_URL,
} from "../constants.js";

const userRouter = Router();

userRouter.get("/callback", async (req, res, next) => {
  try {
    const { code } = req.query;
    const gitUrl = new URL(GITHUB_ACCESS_TOKEN_REQUEST_URL);
    const gitQuery = new URLSearchParams({
      client_id: CLIENT_ID,
      client_secret: CLIENT_SECRET,
      code,
    });
    gitUrl.search = gitQuery;

    const response = await axios.post(gitUrl);
    const { data } = response;

    const access_token = new URLSearchParams(data).get(GITHUB_ACCESS_TOKEN);

    res
      .status(204)
      .cookie(GITHUB_ACCESS_TOKEN, access_token, {
        sameSite: "strict",
        maxAge: new Date().getTime() + 5 * 1000,
        path: "/",
      })
      .redirect("http://localhost:5173/app");

    return res.end();
  } catch (error) {
    console.log(error);
  }
});

userRouter.get("/me", async (req, res, next) => {
  try {
    const { access_token } = req.cookies;

    if (!Boolean(access_token)) {
      return res.status(401).send({ error: "Unauthorized" });
    }

    const response = await axios.get("https://api.github.com/user", {
      headers: { Authorization: `Bearer ${access_token}` },
    });

    const data = response.data;
    return res.status(200).send(data);
  } catch (error) {
    console.log(error);
  }
});

userRouter.delete("/me", (_req, res, next) => {
  try {
    res.status(204).clearCookie(GITHUB_ACCESS_TOKEN);
  } catch (error) {
    console.log(error);
  }
});

export default userRouter;
