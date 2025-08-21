import React, { useState } from "react";
import { Menu, X } from "lucide-react";
import StreakCounter from "./StreakCounter";

function Header() {
  const [isMenuOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed top-0 right-0 left-0 z-50 transition-all duration-500 bg-blue-900">
      <div className="container mx-auto px-6 py-4">
        {/* Main flex row */}
        <div className="flex items-center justify-between">
          {/* Left: Logo + Streak */}
          <div className="flex items-center justify-between w-full mr-2">
            {/* Logo */}
            <div className="text-3xl font-bold text-white">
              <span>Ulearn</span>
            </div>

            {/* StreakCounter always in same line */}
            <StreakCounter />
          </div>

          {/* Right: Desktop nav */}
          <div className="hidden md:flex items-center space-x-8">
            {/* Profile Avatar */}
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-blue-900">
              U
            </div>

            {/* Logout Button */}
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium transition">
              Logout
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="text-white md:hidden flex items-center gap-2"
            onClick={() => setIsOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile nav dropdown */}
        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-blue-800 rounded-lg shadow-lg space-y-4">
            <div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center font-bold text-blue-900 mx-auto">
              U
            </div>
            <button className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md font-medium w-full">
              Logout
            </button>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
