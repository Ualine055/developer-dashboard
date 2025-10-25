import axios from "axios"

const GITHUB_API_BASE = "https://api.github.com"

export const fetchGitHubProfile = async (username) => {
  try {
    const response = await axios.get(`${GITHUB_API_BASE}/users/${username}`)
    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(`GitHub user "${username}" not found`)
    } else if (error.response?.status === 403) {
      throw new Error("GitHub API rate limit exceeded. Please try again later.")
    } else {
      throw new Error("Failed to fetch GitHub profile. Please check your internet connection.")
    }
  }
}
