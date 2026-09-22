import { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/95 backdrop-blur-md shadow-sm">
      
      {/* Main Navbar */}
      <div className="container mx-auto flex h-16 items-center px-4">

        {/* Mobile Hamburger */}
        <div className="lg:hidden w-1/3">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="btn btn-circle bg-pink-50 border-pink-200 text-pink-600 hover:bg-pink-100"
          >
            {/* Always 3 lines */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            >
              <line x1="4" y1="6" x2="20" y2="6" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="18" x2="20" y2="18" />
            </svg>
          </button>
        </div>

        {/* Logo */}
        <div className="flex w-1/3 justify-center lg:w-auto lg:flex-1 lg:justify-start">
          <img
            src="/logo-text.png"
            alt="DevStack logo"
            className="h-9 w-auto object-contain"
          />
        </div>

        {/* Desktop Menu */}
        <ul className="hidden lg:flex items-center gap-8 font-medium text-gray-600">
          <li className="cursor-pointer text-pink-600 transition hover:text-pink-700">
            Home
          </li>

          <li className="cursor-pointer transition hover:text-pink-600">
            Technologies
          </li>

          <li className="cursor-pointer transition hover:text-pink-600">
            Project
          </li>

          <li className="cursor-pointer transition hover:text-pink-600">
            About
          </li>

          <li className="cursor-pointer transition hover:text-pink-600">
            Contact
          </li>
        </ul>

        {/* Buttons */}
        <div className="flex w-1/3 justify-end gap-2 lg:flex-1">
          <button
            className="
              rounded-full border border-pink-500
              bg-pink-600 px-4 py-2
              text-sm font-semibold text-white
              transition duration-200
              hover:bg-pink-700
              hover:shadow-md
            "
          >
            Sign Up
          </button>

          <button
            className="
              rounded-full border border-pink-500
              bg-white px-4 py-2
              text-sm font-semibold text-pink-600
              transition duration-200
              hover:bg-pink-50
              hover:shadow-sm
            "
          >
            Sign In
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="lg:hidden border-t border-pink-100 bg-white px-6 py-4 shadow-md">
          <ul className="flex flex-col gap-4 font-medium text-gray-600">
            <li className="cursor-pointer text-pink-600 hover:text-pink-700">
              Home
            </li>

            <li className="cursor-pointer hover:text-pink-600">
              Technologies
            </li>

            <li className="cursor-pointer hover:text-pink-600">
              Project
            </li>

            <li className="cursor-pointer hover:text-pink-600">
              About
            </li>

            <li className="cursor-pointer hover:text-pink-600">
              Contact
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;