"use client";

import React from "react";
import Typewriter from "typewriter-effect";

function Hero() {
  return (
    <div>
      <section className="text-gray-200 body-font bg-gray-900">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-5xl text-4xl mb-4 font-bold text-yellow-400">
              I am
              <br className="hidden lg:inline-block" />
              <Typewriter
                options={{
                  strings: ['Sumbul Jawed', 'Web Developer', 'UI/UX Designer'],
                  autoStart: true,
                  loop: true,
                  cursor: "|",
                  delay: 80,
                  deleteSpeed: 50,
                }}
              />
            </h1>
            <div className="w-[120px] h-[2px] bg-yellow-500 mb-6 mx-auto" />
            <p className="mb-8 leading-relaxed font-medium text-gray-300">
              I am a skilled Web Developer with a passion for creating user-centric,
              visually engaging, and highly functional web experiences. <br />
              With a strong foundation in both front-end development and UI/UX design, 
              I bridge the gap between design and functionality to deliver seamless digital solutions.
            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded-lg mx-auto shadow-lg"
              alt="hero"
              height={600}
              width={400}
              src={"./hijabi.jpg"}
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
