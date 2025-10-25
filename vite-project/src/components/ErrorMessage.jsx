const ErrorMessage = ({ message }) => {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 p-6">
      <div className="w-16 h-16 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center">
        <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </div>
      <div className="text-center">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white mb-2">Oops! Something went wrong</h3>
        <p className="text-sm text-gray-600 dark:text-gray-300">
          {message || "Failed to load data. Please try again later."}
        </p>
      </div>
    </div>
  )
}

export default ErrorMessage
