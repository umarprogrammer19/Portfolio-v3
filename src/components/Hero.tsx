"use client";

import Image from "next/image";
import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div id="hero">
      <section className="bg-gray-900 text-gray-200 body-font py-24">
        <div className="container mx-auto flex px-6 lg:px-16 py-12 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 flex flex-col items-start text-left mb-16 md:mb-0">
            <h1 className="title-font sm:text-6xl text-5xl mb-6 font-extrabold text-yellow-400 leading-tight">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Sumbul Jawed', 'Web Developer', 'UI/UX Designer'],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 60,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <div className="w-[160px] h-[3px] bg-yellow-500 mb-8 mx-auto" />
            <p className="mb-8 leading-relaxed font-light text-gray-300 max-w-2xl">
              I am a passionate Web Developer focused on creating user-centered, highly interactive, and visually engaging web experiences. <br />
              I bridge the gap between design and functionality to deliver seamless digital solutions with expertise in both front-end development and UI/UX design.
            </p>
            <div className="flex justify-start gap-6">
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-4 bg-yellow-500 text-gray-900 font-semibold rounded-full shadow-lg hover:bg-yellow-600 hover:scale-105 transition-all duration-300 ease-in-out"
              >
                Contact Me
              </a>
              <a
                href="/cv.jpg"
                download="My_CV.jpg"
                className="inline-flex items-center px-8 py-4 bg-transparent border-2 border-yellow-500 text-yellow-500 font-semibold rounded-full shadow-lg hover:bg-yellow-500 hover:text-gray-900 transition-all duration-300 ease-in-out"
              >
                Download CV
              </a>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mt-12 md:mt-0">
            <Image
              className="object-cover object-center rounded-3xl shadow-xl hover:scale-110 transition-transform duration-500"
              alt="hero"
              height={600}
              width={400}
              src={"/hero.png"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
