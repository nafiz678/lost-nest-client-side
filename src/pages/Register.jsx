
const Register = () => {
  return (
    <div className="py-14 flex items-center justify-center bg-gray-100 dark:bg-gray-900">
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-md p-6 w-full max-w-md">
        <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-100 mb-4">Register</h2>
        <form className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your email"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter your password"
            />
          </div>

          <div>
            <label htmlFor="photoUrl" className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Photo URL
            </label>
            <input
              type="url"
              id="photoUrl"
              className="mt-1 block w-full px-3 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
              placeholder="Enter photo URL"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white dark:bg-blue-500 dark:hover:bg-blue-400 hover:bg-blue-700 py-2 px-4 rounded-md text-sm font-medium"
          >
            Register
          </button>
        </form>

        <div className="mt-6 flex items-center justify-between">
          <hr className="w-full border-gray-300 dark:border-gray-600" />
          <span className="text-sm text-gray-500 dark:text-gray-400 px-2">or</span>
          <hr className="w-full border-gray-300 dark:border-gray-600" />
        </div>

        <button
          className="mt-4 w-full bg-red-500 text-white dark:bg-red-400 dark:hover:bg-red-300 hover:bg-red-600 py-2 px-4 rounded-md text-sm font-medium flex items-center justify-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 24 24"
            fill="currentColor"
          >
            <path d="M22.675 12.07c0-.638-.057-1.253-.164-1.844H12v3.494h5.967c-.258 1.386-1.076 2.561-2.289 3.352v2.774h3.706c2.168-2.006 3.291-4.959 3.291-8.776z" />
            <path d="M12 24c3.24 0 5.963-1.073 7.951-2.907l-3.706-2.774c-1.032.69-2.356 1.1-4.245 1.1-3.261 0-6.025-2.205-7.016-5.17H1.171v3.242C3.146 21.998 7.218 24 12 24z" />
            <path d="M4.984 14.248a7.923 7.923 0 0 1 0-4.496V6.51H1.171A11.952 11.952 0 0 0 0 12c0 1.919.445 3.732 1.171 5.49l3.813-3.242z" />
            <path d="M12 4.733c1.765 0 3.35.605 4.595 1.796l3.447-3.447C17.958 1.168 15.235 0 12 0 7.218 0 3.146 2.002 1.171 4.51l3.813 3.242c.991-2.965 3.755-5.17 7.016-5.17z" />
          </svg>
          Continue with Google
        </button>
      </div>
    </div>
  );
};

export default Register;
