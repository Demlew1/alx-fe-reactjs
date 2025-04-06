import axios from "axios";

export const fetchUserData = async (username) => {
  const url = `https://api.github.com/users/${username}`;

  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = apiKey ? { Authorization: `token ${apiKey}` } : {};

  const response = await axios.get(url, { headers });
  return response.data;
};
