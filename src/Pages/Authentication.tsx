import React, { useState } from "react";

const Authentication: React.FC = () => {
  // State with explicit type
  const [authType, setAuthType] = useState<"signup" | "login">("signup");

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="w-full max-w-md bg-white shadow-lg rounded-lg p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-gray-800">
            {authType === "signup" ? "Create an Account" : "Welcome Back"}
          </h1>
          <p className="text-gray-600">
            {authType === "signup"
              ? "Sign up to access Sanchalak."
              : "Login to continue to your account."}
          </p>
        </div>

        {/* Toggle between Signup and Login */}
        <div className="flex justify-center mb-6">
          <button
            onClick={() => setAuthType("signup")}
            className={`px-4 py-2 text-sm font-medium border-b-2 transition ${
              authType === "signup"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-600"
            }`}
          >
            Sign Up
          </button>
          <button
            onClick={() => setAuthType("login")}
            className={`ml-4 px-4 py-2 text-sm font-medium border-b-2 transition ${
              authType === "login"
                ? "border-indigo-600 text-indigo-600"
                : "border-transparent text-gray-600"
            }`}
          >
            Login
          </button>
        </div>

        {/* Authentication Form */}
        <form className="space-y-4">
          {authType === "signup" && (
            <div>
              <label
                htmlFor="signup-name"
                className="block text-sm font-medium text-gray-700"
              >
                Name
              </label>
              <input
                type="text"
                id="signup-name"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="John Doe"
              />
            </div>
          )}
          <div>
            <label
              htmlFor="signup-email"
              className="block text-sm font-medium text-gray-700"
            >
              Email
            </label>
            <input
              type="email"
              id="signup-email"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="you@example.com"
            />
          </div>
          <div>
            <label
              htmlFor="signup-password"
              className="block text-sm font-medium text-gray-700"
            >
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
              placeholder="••••••••"
            />
          </div>

          {authType === "signup" && (
            <div>
              <label
                htmlFor="signup-confirm-password"
                className="block text-sm font-medium text-gray-700"
              >
                Confirm Password
              </label>
              <input
                type="password"
                id="signup-confirm-password"
                className="w-full px-4 py-2 mt-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                placeholder="••••••••"
              />
            </div>
          )}

          <div className="mt-4">
            <button
              type="submit"
              className="w-full bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 transition"
            >
              {authType === "signup" ? "Sign Up" : "Login"}
            </button>
          </div>
        </form>

        {/* Toggle Link */}
        <div className="mt-4 text-center">
          {authType === "signup" ? (
            <p className="text-sm text-gray-600">
              Already have an account?{" "}
              <button
                onClick={() => setAuthType("login")}
                className="text-indigo-600 hover:underline"
              >
                Login here
              </button>
            </p>
          ) : (
            <p className="text-sm text-gray-600">
              Don’t have an account?{" "}
              <button
                onClick={() => setAuthType("signup")}
                className="text-indigo-600 hover:underline"
              >
                Sign up here
              </button>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Authentication;
