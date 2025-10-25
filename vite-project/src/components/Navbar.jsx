import { useTheme } from "../context/ThemeContext"
import ThemeToggle from "./ThemeToggle"

const Navbar = () => {
  const { theme } = useTheme()

  return (
    <nav
      className={`sticky top-0 z-50 backdrop-blur-md border-b transition-colors duration-300 ${
        theme === "dark" ? "bg-slate-900/80 border-slate-700" : "bg-white/80 border-gray-200"
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div
              className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                theme === "dark" ? "bg-blue-600" : "bg-blue-500"
              }`}
            >
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
                />
              </svg>
            </div>
            <h1 className={`text-xl md:text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
              Dev Dashboard
            </h1>
          </div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
