"use client";
import React from 'react';
import Link from 'next/link';
import { FaFacebookF,  FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";

function Footer() {
  return (
    <div>
      <footer className='bg-gray-100 py-8 px-6 md:px-20 text-gray-600 mt-5'>
        <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8'>
          {/* Centered Text */}
          <div className="flex justify-center items-center md:col-span-1">
            <p className="text-sm font-bold text-gray-500">
              © 2024 Sumbul-Jawed
            </p>
          </div>
          
          {/* Social Links on Right */}
          <div className="flex justify-end items-start md:col-span-2">
            <div className='text-right'>
              <h3 className='text-xl font-bold mb-6 text-gray-800 text-right'></h3>
              <div className='flex space-x-4 mb-4 justify-end'>
                <Link href="#"><FaFacebookF className='text-white bg-blue-800 w-8 h-8 rounded-full p-2' /></Link>
                <Link href="#"><FaTwitter className='text-white bg-blue-600 w-8 h-8 rounded-full p-2' /></Link>
                <Link href="#"><FaInstagram className='instagram text-white w-8 h-8 rounded-full p-2' /></Link>
                <Link href="https://www.linkedin.com/feed/"><FaLinkedin className='text-white bg-blue-500 w-8 h-8 rounded-full p-2' /></Link>
              </div>
              <div>
                <a href="mailto:sumbuljawedtdb.1@gmail.com" target='_blank' className='text-blue-800 underline flex items-center gap-2'>
                  <AiOutlineMail className='text-xl' />
                  sumbuljawedtdb.1@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
