import { useState, useEffect } from "react"
import Navbar from "./components/Navbar"
import GitHubCard from "./components/GitHubCard"
import WeatherCard from "./components/WeatherCard"
import LoadingSpinner from "./components/LoadingSpinner"
import ErrorMessage from "./components/ErrorMessage"
import { useTheme } from "./context/ThemeContext"
import { fetchGitHubProfile } from "./services/githubService"
import { fetchWeatherData } from "./services/weatherService"

function App() {
  const { theme } = useTheme()
  const [githubData, setGithubData] = useState(null)
  const [weatherData, setWeatherData] = useState(null)
  const [githubLoading, setGithubLoading] = useState(true)
  const [weatherLoading, setWeatherLoading] = useState(true)
  const [githubError, setGithubError] = useState(null)
  const [weatherError, setWeatherError] = useState(null)

  // GitHub username - Replace with your actual GitHub username
  const GITHUB_USERNAME = "octocat"

  // City for weather - Replace with your city
  const CITY = "London"

  useEffect(() => {
    // Fetch GitHub data
    const loadGitHubData = async () => {
      try {
        setGithubLoading(true)
        setGithubError(null)
        const data = await fetchGitHubProfile(GITHUB_USERNAME)
        setGithubData(data)
      } catch (error) {
        setGithubError(error.message)
      } finally {
        setGithubLoading(false)
      }
    }

    // Fetch Weather data
    const loadWeatherData = async () => {
      try {
        setWeatherLoading(true)
        setWeatherError(null)
        const data = await fetchWeatherData(CITY)
        setWeatherData(data)
      } catch (error) {
        setWeatherError(error.message)
      } finally {
        setWeatherLoading(false)
      }
    }

    loadGitHubData()
    loadWeatherData()
  }, [])

  return (
    <div
      className={`min-h-screen transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-900" : "bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50"
      }`}
    >
      <Navbar />

      <main className="container mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold mb-3 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            Developer Dashboard
          </h1>
          <p className={`text-lg ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
            Track your GitHub activity and local weather in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {/* GitHub Card */}
          <div className="w-full">
            {githubLoading ? (
              <div
                className={`card ${theme === "dark" ? "card-dark" : "card-light"} flex items-center justify-center min-h-[400px]`}
              >
                <LoadingSpinner />
              </div>
            ) : githubError ? (
              <div className={`card ${theme === "dark" ? "card-dark" : "card-light"} min-h-[400px]`}>
                <ErrorMessage message={githubError} />
              </div>
            ) : (
              <GitHubCard data={githubData} theme={theme} />
            )}
          </div>

          {/* Weather Card */}
          <div className="w-full">
            {weatherLoading ? (
              <div
                className={`card ${theme === "dark" ? "card-dark" : "card-light"} flex items-center justify-center min-h-[400px]`}
              >
                <LoadingSpinner />
              </div>
            ) : weatherError ? (
              <div className={`card ${theme === "dark" ? "card-dark" : "card-light"} min-h-[400px]`}>
                <ErrorMessage message={weatherError} />
              </div>
            ) : (
              <WeatherCard data={weatherData} theme={theme} />
            )}
          </div>
        </div>

        {/* Footer */}
        <footer className={`mt-12 text-center pb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-600"}`}>
          <p className="text-sm">Built with React, Vite, and Tailwind CSS</p>
        </footer>
      </main>
    </div>
  )
}

export default App
