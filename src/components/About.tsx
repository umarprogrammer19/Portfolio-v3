import React from 'react';
import Link from 'next/link';


function About() {
  return (
    <div id='about'>
      <section className="text-gray-600 body-font border-t border-blue-600">
        <div className="container mx-auto px-5 py-24">
          <h1 className="flex justify-center title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 underline">
            About Me
          </h1>
          <p className="mb-8 leading-relaxed text-center font-semibold text-blue-950">
            With a background in commerce (B.Com) and a strong passion for technology, <br /> 
            I have dedicated myself to advancing in the IT industry. <br /> My journey has been a blend of 
            financial acumen and technical skills, <br /> which enables me to bring a unique perspective to 
            tech-driven projects. <br /> Skilled in modern development practices, I am focused on creating 
            solutions that drive efficiency and enhance user experience. <br /> I am committed to continuous 
            learning and am eager to contribute meaningfully to any project that allows me to apply my expertise.
          </p>
          <div className="flex justify-center">
            <Link href="#contact">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
              Contact Me
            </button>
            </Link>
            <Link href="https://milestone-1-2-sumbul.vercel.app/">
            <button className="ml-4 inline-flex text-white bg-red-500 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              View CV
            </button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;


