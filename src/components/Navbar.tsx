"use client";

import Link from "next/link";
import React from 'react';
import { IoMdDownload } from "react-icons/io";


function Navbar() {
  return (
    <div className="bg-yellow-200 z-50 sticky top-0">
      <header className="text-gray-600 body-font bg-purple-300">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    
      <span className="ml-3 text-xl text-purple-800 font-bold">S-J Developer</span>
      <a className="mr-5 hover:text-blue-600"></a>
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    <Link href="/" className="text-purple-900 font-semibold text-lg mx-5 hover:text-purple-600 transition-colors duration-200">
  Home
</Link>
    <Link href="#about" className="text-purple-900 font-semibold text-lg mx-5 hover:text-purple-600 transition-colors duration-200">
  About
</Link>
<Link href="#skills" className="text-purple-900 font-semibold text-lg mx-5 hover:text-purple-600 transition-colors duration-200">
  Skills
</Link>
<Link href="#projects" className="text-purple-900 font-semibold text-lg mx-5 hover:text-purple-600 transition-colors duration-200">
  Projects
</Link>
<Link href="#contact" className="text-purple-900 font-semibold text-lg mx-5 hover:text-purple-600 transition-colors duration-200">
  Contacts
</Link>

    </nav>
    <a href="/cv.jpg" download="My_CV.jpg">
    <button className="font-bold text-black inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
        Download CV
        <IoMdDownload className="text-xl ml-2 text-blue-800"/>
    </button>
</a>
  </div>
</header>
    </div>
  
  )
}

export default Navbar;


