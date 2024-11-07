import React from 'react';
import Link from 'next/link';

function About() {
  return (
    <div id="about">
      <section className="bg-gray-800 text-gray-200 body-font py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-center title-font sm:text-5xl text-4xl mb-6 font-extrabold text-yellow-400">
            About Me
          </h1>
          <div className="bg-gray-700 p-8 rounded-xl shadow-lg max-w-3xl mx-auto mb-12">
            <p className="leading-relaxed text-justify font-medium text-gray-300">
              With a background in commerce (B.Com) and a strong passion for technology, I have
              dedicated myself to advancing in the IT industry. My journey blends financial acumen
              with technical skills, enabling me to approach tech-driven projects with a unique
              perspective. I focus on creating solutions that drive efficiency, streamline workflows,
              and enhance user experiences.
            </p>
            <p className="leading-relaxed text-justify font-medium text-gray-300 mt-6">
              Whether it's coding or design, I'm committed to continuous learning and applying my
              knowledge to produce meaningful results. I thrive in collaborative environments where
              I can contribute ideas and learn from others while pushing the boundaries of what’s
              possible in the world of technology.
            </p>
          </div>
          <div className="flex justify-center gap-8">
            <Link href="#contact">
              <button className="inline-flex text-gray-900 bg-yellow-500 border-0 py-3 px-8 focus:outline-none hover:bg-yellow-600 transition-colors duration-300 rounded-full text-lg font-semibold shadow-md">
                Contact Me
              </button>
            </Link>
            <Link href="https://milestone-1-2-sumbul.vercel.app/">
              <button className="ml-4 inline-flex text-gray-900 bg-red-500 border-0 py-3 px-8 focus:outline-none hover:bg-red-600 transition-colors duration-300 rounded-full text-lg font-semibold shadow-md">
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
