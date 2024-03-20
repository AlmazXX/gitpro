export const BASE_URL = 'http://localhost:8626/api';
export const GITHUB_OAUTH_LINK = `https://github.com/login/oauth/authorize?scope=user,repo&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&redirect_uri=${BASE_URL}/users/callback`;
export const GITHUB_ACCESS_TOKEN = 'access_token';
