import React from "react";
import { Link } from "react-router-dom";

function SignUp() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6">
        {/* Title */}
        <h2 className="text-2xl mb-2 font-bold">Welcome</h2>

        {/* Email Input */}
        <div className="flex items-center border rounded-lg px-3 mb-4">
          <name className="text-gray-400 w-5 h-5" />
          <input
            type="text"
            placeholder="Enter full name"
            className="w-full px-2 py-3 outline-none text-sm"
          />
        </div>
        {/* Email Input */}
        <div className="flex items-center border rounded-lg px-3 mb-4">
          <div className="text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-2 py-3 outline-none text-sm"
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 mb-2">
          <div className="text-gray-400 w-5 h-5" />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-2 py-3 outline-none text-sm"
          />
        </div>
        <div className="flex items-center border rounded-lg px-3 mb-2">
          <div className="text-gray-400 w-5 h-5" />
          <input
            type="password"
            placeholder="Comfirm Password"
            className="w-full px-2 py-3 outline-none text-sm"
          />
        </div>
        <button className="w-full bg-green-400 text-white mt-10 py-3 rounded-lg font-semibold transition">
          Create Account
        </button>
        <p className="text-center text-sm text-gray-600 mt-6">
          Already have an account?
          <Link to="/login" className="text-green-400 p-4 font-medium">Login</Link>
        </p>
      </div>
    </div>
  );
}

export default SignUp;
