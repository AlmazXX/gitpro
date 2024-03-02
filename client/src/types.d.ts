export interface IUser {
  name: string;
  login: string;
  email?: string;
  avatar_url: string;
  gravatar_id: string;
  company?: string;
  location?: string;
  bio?: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  followers: number;
  following: number;
}
