import React from "react";
import teamImage from "../assets/team.png"; // use your illustration
import { Link } from "react-router-dom";

function LandingPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-6 bg-white">
      {/* Illustration */}
      <img src={teamImage} alt="Team Collaboration" className="w-64 mb-8" />

      {/* Heading */}
      <h1 className="text-2xl font-bold text-gray-900 text-center mb-3">
        From confusion to clarity, Ai makes it easy
      </h1>

      {/* Subheading */}
      <p className="text-gray-500 text-center max-w-sm mb-8">
        Learn smarter with AI-powered tools that simplify your materials, test
        your knowledge on the treated topic by generating different forms of
        questions
      </p>

      {/* Buttons */}
      <div className="flex flex-col w-full max-w-xs space-y-3">
        <Link to="/signup">
          <button className="w-full bg-green-500 cursor-pointer text-white py-3 rounded-lg font-semibold hover:bg-green-800 transition">
            Sign up
          </button>
        </Link>
        <Link to="/login">
          <button className="w-full cursor-pointer border border-gray-300 text-gray-600 py-3 rounded-lg font-medium hover:bg-gray-100 transition">
            Already have an account
          </button>
        </Link>
      </div>
    </div>
  );
}

export default LandingPage;
