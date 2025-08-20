import React from "react";
import { Mail, Lock, EyeOff, ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="flex justify-center items-center min-h-screen px-4">
      <div className="w-full max-w-sm bg-white rounded-2xl shadow-md p-6">
        {/* <button className="mb-4">
          <ArrowLeft className="w-6 h-6 text-gray-700" />
        </button> */}

        {/* Title */}
        <h2 className="text-2xl mb-2 font-bold">Welcome Back</h2>

        {/* Email Input */}
        <div className="flex items-center border rounded-lg px-3 mb-4">
          <Mail className="text-gray-400 w-5 h-5" />
          <input
            type="email"
            placeholder="Email"
            className="w-full px-2 py-3 outline-none text-sm"
          />
        </div>

        {/* Password Input */}
        <div className="flex items-center border rounded-lg px-3 mb-2">
          <Lock className="text-gray-400 w-5 h-5" />
          <input
            type="password"
            placeholder="Password"
            className="w-full px-2 py-3 outline-none text-sm"
          />
          <EyeOff className="text-gray-400 w-5 h-5" />
        </div>

        {/* Recover Password */}
        <div className="flex justify-end mb-6">
          <a href="#" className="text-sm text-green-400 font-medium">
            Recover Password
          </a>
        </div>

        {/* Sign In Button */}
        <button className="w-full bg-green-400 text-white py-3 rounded-lg font-semibold transition">
          Login
        </button>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-gray-300" />
          <span className="px-2 text-sm text-gray-500">Or continue with</span>
          <hr className="flex-grow border-gray-300" />
        </div>

        {/* Social Buttons */}
        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 mb-3 hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/355037/google.svg"
            alt="Google"
            className="w-5 h-5"
          />
          Continue with Google
        </button>
        <button className="w-full flex items-center justify-center gap-2 border rounded-lg py-3 hover:bg-gray-50 transition">
          <img
            src="https://www.svgrepo.com/show/475647/facebook-color.svg"
            alt="Facebook"
            className="w-5 h-5"
          />
          Continue with Facebook
        </button>

        {/* Sign Up Link */}
        <p className="text-center text-sm text-gray-600 mt-6">
          Don’t have an account?{" "}
          <Link to="/signup" className="text-green-400 font-medium">
            Create Account
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
