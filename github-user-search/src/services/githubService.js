import axios from "axios";

export const searchUsers = async ({ username, location, minRepos }) => {
  let query = "";

  if (username) query += `${username} in:login `;
  if (location) query += `location:${location} `;
  if (minRepos) query += `repos:>=${minRepos}`;

  const apiKey = import.meta.env.VITE_APP_GITHUB_API_KEY;
  const headers = apiKey ? { Authorization: `token ${apiKey}` } : {};

  const response = await axios.get(
    `https://api.github.com/search/users?q=${encodeURIComponent(query.trim())}`,
    {
      headers,
    }
  );

  return response.data.items;
};
