export const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || 'http://localhost:8626';
export const GITHUB_OAUTH_LINK = `https://github.com/login/oauth/authorize?scope=user,repo&client_id=${import.meta.env.VITE_GITHUB_CLIENT_ID}&prompt=consent&redirect_uri=${API_BASE_URL}/users/callback`;
export const GITHUB_ACCESS_TOKEN = 'access_token';
