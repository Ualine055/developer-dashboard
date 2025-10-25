import axios from "axios"

// OpenWeatherMap API - You need to get your own API key from https://openweathermap.org/api
// For development, you can use this demo key (limited requests)
const WEATHER_API_KEY = "YOUR_API_KEY_HERE"
const WEATHER_API_BASE = "https://api.openweathermap.org/data/2.5"

export const fetchWeatherData = async (city) => {
  try {
    // If no API key is set, return mock data for demonstration
    if (WEATHER_API_KEY === "YOUR_API_KEY_HERE") {
      console.warn("Using mock weather data. Please add your OpenWeatherMap API key in src/services/weatherService.js")
      return getMockWeatherData(city)
    }

    const response = await axios.get(`${WEATHER_API_BASE}/weather`, {
      params: {
        q: city,
        appid: WEATHER_API_KEY,
        units: "metric",
      },
    })
    return response.data
  } catch (error) {
    if (error.response?.status === 404) {
      throw new Error(`City "${city}" not found`)
    } else if (error.response?.status === 401) {
      throw new Error("Invalid API key. Please check your OpenWeatherMap API key.")
    } else {
      throw new Error("Failed to fetch weather data. Please check your internet connection.")
    }
  }
}

// Mock data for demonstration purposes
const getMockWeatherData = (city) => {
  return {
    name: city,
    sys: {
      country: "GB",
    },
    main: {
      temp: 18,
      feels_like: 16,
      temp_min: 15,
      temp_max: 21,
      humidity: 65,
    },
    weather: [
      {
        main: "Clouds",
        description: "partly cloudy",
        icon: "02d",
      },
    ],
    wind: {
      speed: 4.5,
    },
  }
}
