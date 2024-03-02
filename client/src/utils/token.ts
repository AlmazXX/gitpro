import { Cookies } from 'react-cookie';
import { GITHUB_ACCESS_TOKEN } from '../constants';

const cookies = new Cookies();

export const getGithubAccessToken = () => cookies.get(GITHUB_ACCESS_TOKEN);
