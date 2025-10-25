import { useState, useEffect } from "react"

const WeatherCard = ({ data, theme }) => {
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  if (!data) return null

  const { name, main, weather, wind, sys } = data

  const weatherCondition = weather[0]
  const temperature = Math.round(main.temp)
  const feelsLike = Math.round(main.feels_like)
  const humidity = main.humidity
  const windSpeed = Math.round(wind.speed * 3.6) // Convert m/s to km/h

  const getWeatherIcon = (condition) => {
    const iconMap = {
      Clear: "☀️",
      Clouds: "☁️",
      Rain: "🌧️",
      Drizzle: "🌦️",
      Thunderstorm: "⛈️",
      Snow: "❄️",
      Mist: "🌫️",
      Smoke: "🌫️",
      Haze: "🌫️",
      Dust: "🌫️",
      Fog: "🌫️",
      Sand: "🌫️",
      Ash: "🌫️",
      Squall: "💨",
      Tornado: "🌪️",
    }
    return iconMap[condition] || "🌤️"
  }

  const formatTime = (date) => {
    return date.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    })
  }

  const formatDate = (date) => {
    return date.toLocaleDateString("en-US", {
      weekday: "long",
      year: "numeric",
      month: "long",
      day: "numeric",
    })
  }

  return (
    <div className={`card ${theme === "dark" ? "card-dark" : "card-light"}`}>
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <svg className="w-6 h-6 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
          />
        </svg>
        <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>Current Weather</h2>
      </div>

      {/* Location */}
      <div className="text-center mb-6">
        <h3 className={`text-3xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          {name}, {sys.country}
        </h3>
        <p className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>{formatDate(currentTime)}</p>
      </div>

      {/* Current Time */}
      <div className={`text-center mb-6 p-4 rounded-lg ${theme === "dark" ? "bg-slate-700" : "bg-blue-50"}`}>
        <div className={`text-4xl font-bold ${theme === "dark" ? "text-blue-400" : "text-blue-600"}`}>
          {formatTime(currentTime)}
        </div>
        <div className={`text-sm mt-1 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Local Time</div>
      </div>

      {/* Weather Icon and Temperature */}
      <div className="text-center mb-6">
        <div className="text-8xl mb-4">{getWeatherIcon(weatherCondition.main)}</div>
        <div className={`text-6xl font-bold mb-2 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          {temperature}°C
        </div>
        <div className={`text-xl capitalize mb-2 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
          {weatherCondition.description}
        </div>
        <div className={`text-sm ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}>
          Feels like {feelsLike}°C
        </div>
      </div>

      {/* Weather Details Grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-slate-700" : "bg-gray-50"}`}>
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
            <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Wind Speed
            </span>
          </div>
          <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            {windSpeed} km/h
          </div>
        </div>

        <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-slate-700" : "bg-gray-50"}`}>
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
              />
            </svg>
            <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Humidity
            </span>
          </div>
          <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>{humidity}%</div>
        </div>

        <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-slate-700" : "bg-gray-50"}`}>
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Min Temp
            </span>
          </div>
          <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            {Math.round(main.temp_min)}°C
          </div>
        </div>

        <div className={`p-4 rounded-lg ${theme === "dark" ? "bg-slate-700" : "bg-gray-50"}`}>
          <div className="flex items-center space-x-2 mb-2">
            <svg className="w-5 h-5 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
              />
            </svg>
            <span className={`text-sm font-medium ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>
              Max Temp
            </span>
          </div>
          <div className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
            {Math.round(main.temp_max)}°C
          </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherCard
