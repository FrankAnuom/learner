import React, { useState } from "react";
import { Menu, X } from "lucide-react";

function Header() {
  const [isMenuOpen, setIsOpen] = useState(false);

  const navItems = [
    { name: "Home" },
    { name: "Login" },
    { name: "Create Account" },
  ];

  return (
    <header className="fixed top-0 right-0 left-0 z-50 transition-all duration-500">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="text-3xl mt-2 font-bold">
            <span className="  rounded text-white p-0.5">Ulearn</span>
          </div>
          {/* desktop menu */}
          <nav className="hidden md:flex space-x-8">
            {navItems.map((item, index) => {
              return (
                <button
                  key={index}
                  className="text-white hover:text-blue-200 hover:rounded transition-all duration-300 font-medium relative group"
                >
                  {item.name}
                </button>
              );
            })}
          </nav>

          {/* mobile menu */}
          <button
            className="text-white md:hidden"
            onClick={() => setIsOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMenuOpen && (
          <nav className="md:hidden mt-4 pb-4 border-t border-slate-800 pt-4 bg-blue-800 rounded-lg shadow-lg ">
            {navItems.map((item, index) => {
              return (
                <button
                  key={index}
                  className="block w-full text-center py-3 px-4 text-white font-bold  hover:bg-slate-blue-800"
                >
                  {item.name}
                </button>
              );
            })}
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
