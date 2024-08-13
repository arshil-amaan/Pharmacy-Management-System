import React from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    e.target.reset();
  };
  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h1 className="font-bold text-3xl tracking-wider mb-8">LOGIN</h1>

        <form onSubmit={handleFormSubmit} className="w-full space-y-4">
          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Email:
            </label>
            <input
              className="outline-none h-10 px-4 border rounded w-full"
              id="email"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div>
            <label className="block text-gray-700 font-semibold mb-1">
              Password:
            </label>
            <input
              className="outline-none h-10 px-4 border rounded w-full"
              id="password"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500
             text-white py-2 rounded hover:bg-blue-600 
             transition duration-300"
            >
              Login
            </button>
          </div>
          <div className="mt-4">
            <p className="text-xl text-gray-600">
              Don't have an account?{" "}
              <Link
                to="/sign-up"
                className="text-blue-600 text-xl hover:underline"
              >
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
