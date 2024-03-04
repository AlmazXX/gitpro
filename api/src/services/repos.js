import { isAxiosError } from "axios";
import { ApiError } from "../ApiError.js";
import { axiosApi } from "../axiosApi.js";

class RepoService {
  constructor() {}

  async getRepos(req, res) {
    try {
      const { user } = req.query;

      if (!Boolean(user)) {
        throw new ApiError("User field is required", 401);
      }

      const { data } = await axiosApi.get(`/users/${user}/repos`);

      const repos = data.map((repo) => ({
        name: repo.name,
        html_url: repo.html_url,
        owner_login: repo.owner.login,
        owner_html_url: repo.owner.html_url,
      }));

      return res.status(200).send(repos);
    } catch (error) {
      if (isAxiosError(error) && error.response && error.response.status) {
        return res
          .status(error.response.status)
          .send({ message: error.response.data.message });
      }
      return res.status(error.httpCode).send({ message: error.message });
    }
  }

  async getOwnRepos(req, res) {
    try {
      const { access_token } = req.cookies;

      if (!Boolean(access_token)) {
        throw new ApiError("Unauthorized", 401);
      }

      const { visibility = "public" } = req.query;

      const { data } = await axiosApi.get(
        `/user/repos?visibility=${visibility}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      const repos = data.map((repo) => ({
        name: repo.name,
        html_url: repo.html_url,
        owner_login: repo.owner.login,
        owner_html_url: repo.owner.html_url,
      }));

      return res.status(200).send(repos);
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

export default RepoService;
