// import React from 'react';
import logofooter from './assets/logo-text.png'
const Footer = () => {
  
return (
  <footer className="bg-gray-950 text-gray-300 mt-16">

    {/* Main Footer */}
    <div className="container mx-auto px-6 py-12">

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Logo + Description */}
        <div>
          <img
            src={logofooter}
            alt="DevStack"
            className="w-36 mb-5"
          />

          <p className="text-sm text-gray-400 leading-6 max-w-xs">
            Curated tools, technologies, and resources for developers
            building modern software.
          </p>

          {/* Social Links */}
          <div className="flex gap-5 mt-6">
            <a
              href="#"
              className="text-sm hover:text-white transition"
            >
              GitHub
            </a>

            <a
              href="#"
              className="text-sm hover:text-white transition"
            >
              Twitter
            </a>

            <a
              href="#"
              className="text-sm hover:text-white transition"
            >
              LinkedIn
            </a>
          </div>
        </div>


        {/* Product */}
        <div>
          <h3 className="text-white font-bold text-sm mb-5">
            PRODUCT
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Home
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Technologies
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Projects
              </a>
            </li>
          </ul>
        </div>


        {/* Company */}
        <div>
          <h3 className="text-white font-bold text-sm mb-5">
            COMPANY
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                About
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Contact
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Careers
              </a>
            </li>
          </ul>
        </div>


        {/* Legal */}
        <div>
          <h3 className="text-white font-bold text-sm mb-5">
            LEGAL
          </h3>

          <ul className="space-y-3 text-sm text-gray-400">
            <li>
              <a href="#" className="hover:text-white transition">
                Privacy Policy
              </a>
            </li>

            <li>
              <a href="#" className="hover:text-white transition">
                Terms of Service
              </a>
            </li>
          </ul>
        </div>

      </div>


      {/* Bottom Border */}
      <div className="border-t border-gray-800 mt-10 pt-6">

        <div className="flex flex-col md:flex-row justify-between items-center gap-4">

          <small className="text-gray-500">
            © 2026 Dev Stack. All rights reserved.
          </small>

          <div className="flex gap-6 text-sm text-gray-500">
            <a
              href="#"
              className="hover:text-white transition"
            >
              Privacy
            </a>

            <a
              href="#"
              className="hover:text-white transition"
            >
              Terms
            </a>
          </div>

        </div>

      </div>

    </div>
  </footer>
);


};

export default Footer;