import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Link } from 'react-router-dom';


export default function Header({className}) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    }
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className={`fixed ${className} top-2 left-1/2 transform -translate-x-1/2 w-full max-w-5xl z-50 px-2 p-4`}>
      <header
        className={`
          bg-white shadow-md w-full overflow-hidden p-2
          rounded-md md:rounded-full
          transition-all duration-300
        `}
      >
        <div className="px-4 sm:px-6 lg:px-0">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="font-bold text-purple-600">
             <img src="./src/assets/img/white_on_black.png" className="h-16 w-auto rounded-full object-contain mx-auto" alt="Logo" />
          </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex space-x-6 pr-4">
              <Link to="/" className="text-pink-700 hover:text-pink-600">Home</Link>
              <Link to="/video" className="text-pink-700 hover:text-pink-600">Videos</Link>
              <Link to="/about" className="text-pink-700 hover:text-pink-600">About</Link>
              <Link to="/galerya" className="text-pink-700 hover:text-pink-600">Galerya</Link>
            </nav>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMenu}
              className="md:hidden text-gray-700 focus:outline-none"
              aria-label="Toggle Menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu with animation */}
        <div
          className={`
            md:hidden
            bg-white
            border-t border-gray-200
            px-4 py-3 space-y-2
            overflow-hidden
            transition-[max-height,opacity] duration-300 ease-in-out
            ${isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"}
          `}
          style={{ willChange: "max-height, opacity" }}
        >
          <a href="#" className="block text-gray-700 hover:text-pink-600">Home</a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">Videos</a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">About</a>
          <a href="#" className="block text-gray-700 hover:text-pink-600">Contact</a>
        </div>
      </header>
    </div>
  );
}
