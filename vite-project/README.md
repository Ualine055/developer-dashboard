# Developer Dashboard

A modern, responsive developer dashboard built with React, Vite, and Tailwind CSS. Track your GitHub activity and local weather in real-time with a beautiful light/dark mode interface.

![Developer Dashboard](./screenshot.png)

## 🚀 Features

- **GitHub Profile Card**: Displays my GitHub profile information including:
  - Profile avatar
  - Number of repositories
  - Followers and following count
  - Location and website
  - Bio information

- **Weather Card**: Shows current weather conditions including:
  - Current temperature
  - Weather condition with emoji icons
  - Wind speed
  - Humidity levels
  - Min/Max temperatures
  - Real-time clock that updates every second

- **Light/Dark Mode Toggle**: Seamless theme switching with persistent preferences saved to localStorage

- **Responsive Design**: Fully responsive layout that works on mobile, tablet, and desktop devices

- **Error Handling**: Graceful error messages for API failures and network issues

- **Loading States**: Beautiful loading spinners while fetching data

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Axios** - HTTP client for API requests
- **Context API** - State management for theme
- **OpenWeatherMap API** - Weather data
- **GitHub API** - Profile information

## 📋 APIs Used

1. **GitHub API**
   - Endpoint: `https://api.github.com/users/[Ualine055]`
   - No API key required
   - Rate limit: 60 requests per hour (unauthenticated)

2. **OpenWeatherMap API**
   - Endpoint: `https://api.openweathermap.org/data/2.5/weather`
   - Requires free API key from [OpenWeatherMap](https://openweathermap.org/api)
   - Free tier: 1,000 calls per day

## 📁 Folder Structure

\`\`\`
developer-dashboard/
├── public/
├── src/
│   ├── components/
│   │   ├── ErrorMessage.jsx      # Error display component
│   │   ├── GitHubCard.jsx        # GitHub profile card
│   │   ├── LoadingSpinner.jsx    # Loading indicator
│   │   ├── Navbar.jsx            # Navigation bar
│   │   ├── ThemeToggle.jsx       # Theme switcher button
│   │   └── WeatherCard.jsx       # Weather information card
│   ├── context/
│   │   └── ThemeContext.jsx      # Theme state management
│   ├── services/
│   │   ├── githubService.js      # GitHub API calls
│   │   └── weatherService.js     # Weather API calls
│   ├── App.jsx                   # Main application component
│   ├── index.css                 # Global styles and Tailwind
│   └── main.jsx                  # Application entry point
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.js
├── vite.config.js
└── README.md
\`\`\`

## 🚀 Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- OpenWeatherMap API key (free)

### Installation

1. **Clone the repository**
   \`\`\`bash
   git clone https://github.com/yourusername/developer-dashboard.git
   cd developer-dashboard
   \`\`\`

2. **Install dependencies**
   \`\`\`bash
   npm install
   \`\`\`

3. **Configure API Keys**
   
   Open `src/services/weatherService.js` and replace `YOUR_API_KEY_HERE` with your OpenWeatherMap API key:
   \`\`\`javascript
   const WEATHER_API_KEY = 'your_actual_api_key_here'
   \`\`\`

4. **Update Configuration**
   
   Open `src/App.jsx` and update the following:
   - Replace `'octocat'` with your GitHub username
   - Replace `'London'` with your city name

5. **Run the development server**
   \`\`\`bash
   npm run dev
   \`\`\`

6. **Open your browser**
   
   Navigate to `http://localhost:5173`

### Build for Production

\`\`\`bash
npm run build
\`\`\`

The built files will be in the `dist` directory.

### Preview Production Build

\`\`\`bash
npm run preview
\`\`\`

## 🎨 Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

\`\`\`javascript
theme: {
  extend: {
    colors: {
      primary: {
        light: '#3b82f6',
        dark: '#2563eb',
      },
      // Add more custom colors
    }
  }
}
\`\`\`

### Changing GitHub Username

In `src/App.jsx`, update:
\`\`\`javascript
const GITHUB_USERNAME = 'your-github-username'
\`\`\`

### Changing Weather Location

In `src/App.jsx`, update:
\`\`\`javascript
const CITY = 'Your-City-Name'
\`\`\`

## 📸 Screenshots

### Light Mode
![Light Mode](./screenshot-light.png)

### Dark Mode
![Dark Mode](./screenshot-dark.png)

