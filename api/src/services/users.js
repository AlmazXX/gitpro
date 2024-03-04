import axios, { isAxiosError } from "axios";
import { ApiError } from "../ApiError.js";
import { axiosApi } from "../axiosApi.js";
import { CLIENT_ID, CLIENT_SECRET } from "../config/config.js";
import {
  GITHUB_ACCESS_TOKEN,
  GITHUB_ACCESS_TOKEN_REQUEST_URL,
  CLIENT_URL,
} from "../constants.js";

class UserService {
  constructor() {}

  async authorize(req, res) {
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
        .redirect(`${CLIENT_URL}/app`);
      return res.end();
    } catch (error) {
      if (isAxiosError(error) && error.response && error.response.status) {
        return res
          .status(error.response.status)
          .send({ message: error.response.data.message });
      }
      return res.status(error.httpCode).send({ message: error.message });
    }
  }

  unauthorize(_, res) {
    try {
      res.status(204).clearCookie(GITHUB_ACCESS_TOKEN);
      return res.end();
    } catch (error) {
      if (isAxiosError(error) && error.response && error.response.status) {
        return res
          .status(error.response.status)
          .send({ message: error.response.data.message });
      }
      return res.status(error.httpCode).send({ message: error.message });
    }
  }

  async getSelf(req, res) {
    try {
      const { access_token } = req.cookies;

      if (!Boolean(access_token)) {
        throw new ApiError("Unauthorized", 401);
      }

      const { data } = await axiosApi.get("/user", {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const user = {
        name: data.name,
        login: data.login,
        email: data.email || "",
        avatar_url: data.avatar_url || "",
        gravatar_id: data.avatar_url,
        company: data.company || "",
        location: data.location || "",
        bio: data.bio || "",
        html_url: data.html_url,
        followers_url: data.followers_url,
        following_url: data.following_url.split("{/other_user}")[0],
        followers: data.followers,
        following: data.following,
      };

      return res.status(200).send(user);
    } catch (error) {
      if (isAxiosError(error) && error.response && error.response.status) {
        return res
          .status(error.response.status)
          .send({ message: error.response.data.message });
      }
      return res.status(error.httpCode).send({ message: error.message });
    }
  }

  async updateSelf(req, res) {
    try {
      const { access_token } = req.cookies;

      if (!Boolean(access_token)) {
        throw new ApiError("Unauthorized", 401);
      }

      const { body } = req;

      await axiosApi.patch("/user", body, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      return res.send("OK");
    } catch (error) {
      if (isAxiosError(error) && error.response && error.response.status) {
        return res
          .status(error.response.status)
          .send({ message: error.response.data.message });
      }
      return res.status(error.httpCode).send({ message: error.message });
    }
  }

  async searchUsers(req, res) {
    try {
      const { user } = req.query;

      if (!Boolean(user)) {
        throw new ApiError("User name is required", 406);
      }

      const { data } = await axiosApi.get(`search/users?q=${user}+in:fullname`);

      const users = data.items.map((user) => ({
        login: user.login,
        avatar_url: user.avatar_url || "",
        gravatar_id: user.avatar_url,
        html_url: user.html_url,
        repos_url: user.repos_url,
      }));

      return res.send({ users, total_count: data.total_count });
    } catch (error) {
      if (isAxiosError(error) && error.response && error.response.status) {
        return res
          .status(error.response.status)
          .send({ message: error.response.data.message });
      }
      return res.status(error.httpCode).send({ message: error.message });
    }
  }
}

export default UserService;
