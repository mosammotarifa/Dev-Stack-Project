// import React from 'react';
import  logoNavbar from './assets/logo-text.png'

const Navbar = () => {
   return (
  <nav className="sticky top-0 z-50 w-full border-b border-pink-100 bg-white/95 backdrop-blur-md shadow-sm">
    <div className="container mx-auto flex h-16 items-center justify-between px-4">

      {/* Mobile Hamburger */}
      <div className="lg:hidden">
        <label className="btn btn-circle swap swap-rotate bg-pink-50 border-pink-200 text-pink-600 hover:bg-pink-100">
          <input type="checkbox" />

          {/* Hamburger */}
          <svg
            className="swap-off fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* Close */}
          <svg
            className="swap-on fill-current"
            xmlns="http://www.w3.org/2000/svg"
            width="25"
            height="25"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>

      {/* Logo */}
      <div className="flex items-center lg:flex-1">
        <img
          src={logoNavbar}
          alt="DevStack logo"
          className="h-9 w-auto object-contain"
        />
      </div>

      {/* Menu */}
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
      <div className="flex flex-1 justify-end gap-2">
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
  </nav>
);
};

export default Navbar;