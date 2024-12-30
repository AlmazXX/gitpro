import { axiosApi } from '../common/api-service/axiosApi.js';
import { ApiError } from '../common/exceptions/ApiError.js';

export class RepoService {
  constructor() {
    this.getRepos = this.getRepos.bind(this);
    this.getOwnRepos = this.getOwnRepos.bind(this);
  }
  mapRepos(repos) {
    return repos.map(repo => ({
      name: repo.name,
      html_url: repo.html_url,
      owner_login: repo.owner.login,
      owner_html_url: repo.owner.html_url,
    }));
  }

  async getRepos(req, res, next) {
    try {
      const user =
        req.query &&
        req.query.user &&
        typeof req.query.user === 'string' &&
        encodeURIComponent(req.query.user);

      if (!Boolean(user)) {
        return next(new ApiError('User field is required', 401));
      }

      const { data } = await axiosApi.get(`/users/${user}/repos`);

      const repos = this.mapRepos(data);

      return res.status(200).send(repos);
    } catch (error) {
      return next(error);
    }
  }

  async getOwnRepos(req, res, next) {
    try {
      const { access_token } = req;

      const visibility =
        (req.query &&
          req.query.visibility &&
          ['public', 'private'].includes(req.query.visibility) &&
          req.query.visibility) ||
        'public';

      const { data } = await axiosApi.get(
        `/user/repos?visibility=${visibility}`,
        {
          headers: { Authorization: `Bearer ${access_token}` },
        }
      );

      const repos = this.mapRepos(data);

      return res.status(200).send(repos);
    } catch (error) {
      return next(error);
    }
  }
}
