import axios from 'axios';

export const fetchGitHubUser = async (username) => {
  try {
    const response = await axios.get(`https://api.github.com/users/${username}`);
    return response.data;
  } catch (error) {
    console.error('GitHub API error:', error);
    return null;
  }
};
