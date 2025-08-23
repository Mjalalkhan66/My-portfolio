import React, { useState } from "react";
import { FaLinkedin, FaGithub, FaFacebook } from "react-icons/fa";
import { Link, Outlet } from "react-router-dom";
import { BsMoon, BsSun } from "react-icons/bs";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div
      className={`min-h-screen flex flex-col transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-white"
          : "bg-gradient-to-br from-cyan-200 via-yellow-100 to-cyan-100 text-purple-900"
      }`}
    >
      {/* Navbar */}
      <nav
        className={`flex items-center justify-between w-full px-6 py-4 shadow-lg transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-r from-purple-800 to-blue-800"
            : "bg-gradient-to-r from-yellow-200 to-cyan-200"
        }`}
      >
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="my logo.png" alt="Logo" className="w-10 h-10 rounded-full" />
        </div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8 text-lg">
          {["/", "/about", "/services", "/myprojects", "/contact"].map(
            (path, i) => (
              <li key={i}>
                <Link
                  to={path}
                  className="hover:text-blue-600 transform hover:scale-105 transition-transform duration-300 ease-in-out"
                >
                  {path === "/"
                    ? "Home"
                    : path.replace("/", "").replace(/^\w/, (c) =>
                        c.toUpperCase()
                      )}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>

        {/* Dark/Light Mode Toggle */}
        <button
          onClick={() => setDarkMode(!darkMode)}
          className={`ml-4 p-2 rounded-full flex items-center justify-center transition-all duration-500 transform hover:scale-110
            ${
              darkMode
                ? "bg-transparent border border-cyan-400 text-cyan-400 hover:bg-cyan-400 hover:text-black"
                : "bg-gradient-to-r from-pink-500 via-yellow-400 to-orange-500 text-white hover:opacity-90"
            }`}
        >
          {darkMode ? <BsSun size={20} /> : <BsMoon size={20} />}
        </button>
      </nav>

      {/* Mobile Nav Links */}
      {menuOpen && (
        <div className="md:hidden flex flex-col items-center space-y-4 py-6 bg-opacity-95 shadow-lg w-full">
          {["/", "/about", "/services", "/myprojects", "/contact"].map(
            (path, i) => (
              <Link
                key={i}
                to={path}
                className="hover:text-blue-400 text-lg"
                onClick={() => setMenuOpen(false)}
              >
                {path === "/"
                  ? "Home"
                  : path.replace("/", "").replace(/^\w/, (c) =>
                      c.toUpperCase()
                    )}
              </Link>
            )
          )}
        </div>
      )}

      {/* Page Content */}
      <main className="flex-1 w-full px-6 py-16">
        <Outlet context={{ darkMode }} />
      </main>

      {/* Footer */}
      <footer
        className={`w-full px-6 py-4 flex flex-col md:flex-row items-center justify-between transition-colors duration-500 ${
          darkMode
            ? "bg-gradient-to-r from-blue-800 to-purple-800"
            : "bg-gradient-to-r from-yellow-200 to-cyan-200"
        }`}
      >
        <div className="flex items-center space-x-3 mb-4 md:mb-0">
          <p>@Mjalalkhan</p>
        </div>
        <div className="flex space-x-6 text-2xl">
          <a
            href="https://www.linkedin.com/in/muhammad-jalal-khan-999950321/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/Mjalalkhan66"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <FaGithub />
          </a>
          <a
            href="https://facebook.com/M Jalal Khan"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-500 transform hover:scale-110 transition-transform duration-300 ease-in-out"
          >
            <FaFacebook />
          </a>
        </div>
      </footer>
    </div>
  );
}
