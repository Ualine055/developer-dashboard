const GitHubCard = ({ data, theme }) => {
  if (!data) return null

  const { avatar_url, name, login, bio, public_repos, followers, following, location, blog, html_url } = data

  return (
    <div className={`card ${theme === "dark" ? "card-dark" : "card-light"}`}>
      {/* Header */}
      <div className="flex items-center space-x-2 mb-6">
        <svg className="w-6 h-6 text-gray-700 dark:text-gray-300" fill="currentColor" viewBox="0 0 24 24">
          <path
            fillRule="evenodd"
            d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
            clipRule="evenodd"
          />
        </svg>
        <h2 className={`text-2xl font-bold ${theme === "dark" ? "text-white" : "text-gray-800"}`}>GitHub Profile</h2>
      </div>

      {/* Profile Section */}
      <div className="flex flex-col items-center mb-6">
        <img
          src={avatar_url || "/placeholder.svg"}
          alt={`${login}'s avatar`}
          className="w-32 h-32 rounded-full border-4 border-blue-500 shadow-lg mb-4"
        />
        <h3 className={`text-2xl font-bold mb-1 ${theme === "dark" ? "text-white" : "text-gray-800"}`}>
          {name || login}
        </h3>
        <a
          href={html_url}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-500 hover:text-blue-600 transition-colors mb-3"
        >
          @{login}
        </a>
        {bio && (
          <p className={`text-center text-sm mb-4 ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{bio}</p>
        )}
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className={`text-center p-4 rounded-lg ${theme === "dark" ? "bg-slate-700" : "bg-gray-50"}`}>
          <div className="text-3xl font-bold text-blue-500 mb-1">{public_repos}</div>
          <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Repositories</div>
        </div>

        <div className={`text-center p-4 rounded-lg ${theme === "dark" ? "bg-slate-700" : "bg-gray-50"}`}>
          <div className="text-3xl font-bold text-green-500 mb-1">{followers}</div>
          <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Followers</div>
        </div>

        <div className={`text-center p-4 rounded-lg ${theme === "dark" ? "bg-slate-700" : "bg-gray-50"}`}>
          <div className="text-3xl font-bold text-purple-500 mb-1">{following}</div>
          <div className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>Following</div>
        </div>
      </div>

      {/* Additional Info */}
      <div className="space-y-3">
        {location && (
          <div className="flex items-center space-x-2">
            <svg
              className={`w-5 h-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className={`text-sm ${theme === "dark" ? "text-gray-300" : "text-gray-600"}`}>{location}</span>
          </div>
        )}

        {blog && (
          <div className="flex items-center space-x-2">
            <svg
              className={`w-5 h-5 ${theme === "dark" ? "text-gray-400" : "text-gray-500"}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1"
              />
            </svg>
            <a
              href={blog.startsWith("http") ? blog : `https://${blog}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-blue-500 hover:text-blue-600 transition-colors truncate"
            >
              {blog}
            </a>
          </div>
        )}
      </div>
    </div>
  )
}

export default GitHubCard
