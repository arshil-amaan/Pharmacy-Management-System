import React from "react";

const SignupForm = () => {
  const handleFormSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const obj = Object.fromEntries(formData.entries());
    e.target.reset();
  };

  return (
    <div className="bg-gray-100 min-h-screen flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="font-bold text-3xl tracking-wider mb-8">SIGN UP</h2>

        <form onSubmit={handleFormSubmit} className="space-y-6">
          <div className="flex flex-col">
            <label>Username:</label>
            <input
              id="username"
              className="outline-none h-10 px-4 border rounded w-full"
              type="text"
              name="username"
              placeholder="Enter your username"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>Email:</label>
            <input
              id="email"
              className="outline-none h-10 px-4 border rounded w-full"
              type="email"
              name="email"
              placeholder="Enter your email"
              required
            />
          </div>

          <div className="flex flex-col">
            <label>Password:</label>
            <input
              id="password"
              className="outline-none h-10 px-4 border rounded w-full"
              type="password"
              name="password"
              placeholder="Enter your password"
              required
            />
          </div>

          <div>
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition duration-300"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
