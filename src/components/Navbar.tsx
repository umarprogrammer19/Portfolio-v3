"use client";

import Link from "next/link";
import React from "react";
import { IoMdDownload } from "react-icons/io";

function Navbar() {
  return (
    <div className="bg-gray-900 z-50 sticky top-0 shadow-lg">
      <header className="text-gray-200 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <span className="ml-3 text-2xl font-bold text-yellow-400">S-J Developer</span>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center space-x-8">
            {[
              { href: "/", label: "Home" },
              { href: "#about", label: "About" },
              { href: "#skills", label: "Skills" },
              { href: "#projects", label: "Projects" },
              { href: "#contact", label: "Contacts" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-gray-300 font-semibold text-lg hover:text-yellow-500 transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <a href="/cv.jpg" download="My_CV.jpg">
            <button className="flex items-center bg-yellow-500 text-gray-900 font-bold py-2 px-4 rounded-lg hover:bg-yellow-600 transition duration-200 mt-4 md:mt-0">
              Download CV
              <IoMdDownload className="ml-2 text-lg" />
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}

export default Navbar;
