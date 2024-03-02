import axios from "axios";
import { GITHUB_API_BASE_URL } from "./constants.js";

export const axiosApi = axios.create({
  baseURL: GITHUB_API_BASE_URL,
  headers: {
    "X-GitHub-Api-Version": "2022-11-28",
  },
});
