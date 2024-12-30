import axios from 'axios';
import { axiosApi } from '../common/api-service/axiosApi.js';
import {
  CLIENT_URL,
  GITHUB_ACCESS_TOKEN,
  GITHUB_LOGIN_ACCESS_TOKEN_URL,
} from '../common/constants/constants.js';
import { ApiError } from '../common/exceptions/ApiError.js';
import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from '../config/config.js';

export class UserService {
  constructor() {}

  async authorize(req, res, next) {
    try {
      const code =
        req.query &&
        req.query.code &&
        typeof req.query.code === 'string' &&
        encodeURIComponent(req.query.code);

      const options = {
        params: {
          client_id: GITHUB_CLIENT_ID,
          client_secret: GITHUB_CLIENT_SECRET,
          code,
        },
        headers: {
          Accept: 'application/json',
        },
      };

      const response = await axios.post(
        GITHUB_LOGIN_ACCESS_TOKEN_URL,
        {},
        options
      );

      if (response.data.error) {
        return next(new ApiError(response.data.error_description, 401));
      }

      const { access_token } = response.data;

      res
        .status(307)
        .cookie(GITHUB_ACCESS_TOKEN, access_token, {
          sameSite: 'strict',
          maxAge: new Date().getTime() + 5 * 1000,
          path: '/',
        })
        .redirect(`${CLIENT_URL}/app`);
      return res.end();
    } catch (error) {
      return next(error);
    }
  }

  unauthorize(_, res, next) {
    try {
      res.status(204).clearCookie(GITHUB_ACCESS_TOKEN);
      return res.end();
    } catch (error) {
      return next(error);
    }
  }

  async getSelf(req, res, next) {
    try {
      const { access_token } = req;

      const { data } = await axiosApi.get('/user', {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      const user = {
        name: data.name,
        login: data.login,
        email: data.email || '',
        avatar_url: data.avatar_url || '',
        gravatar_id: data.avatar_url,
        company: data.company || '',
        location: data.location || '',
        bio: data.bio || '',
        html_url: data.html_url,
        followers_url: data.followers_url,
        following_url: data.following_url.split('{/other_user}')[0],
        followers: data.followers,
        following: data.following,
      };

      return res.status(200).send(user);
    } catch (error) {
      return next(error);
    }
  }

  async updateSelf(req, res, next) {
    try {
      const { access_token } = req;

      const data = Object.keys(req.body)
        .filter(key => ['name', 'bio', 'company', 'location'].includes(key))
        .reduce(
          (acc, key) => ({ ...acc, [key]: encodeURIComponent(req.body[key]) }),
          {}
        );

      await axiosApi.patch('/user', data, {
        headers: { Authorization: `Bearer ${access_token}` },
      });

      return res.send('OK');
    } catch (error) {
      return next(error);
    }
  }

  async searchUsers(req, res) {
    try {
      const user =
        req.query &&
        req.query.user &&
        typeof req.query.user === 'string' &&
        encodeURIComponent(req.query.user);

      if (!Boolean(user)) {
        return next(new ApiError('User name is required', 406));
      }

      const { data } = await axiosApi.get(`search/users?q=${user}+in:fullname`);

      const users = data.items.map(user => ({
        login: user.login,
        avatar_url: user.avatar_url || '',
        gravatar_id: user.avatar_url,
        html_url: user.html_url,
        repos_url: user.repos_url,
      }));

      return res.send({ users, total_count: data.total_count });
    } catch (error) {
      return next(error);
    }
  }
}
