"use client";
import React from 'react';

function Skills() {
  return (
    <div id='skills'>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-bold title-font text-black underline">
              MY SKILLS
            </h1>
          </div>
          <div className="flex flex-wrap -m-4">
            {/* Skill 1 */}
            <div className="p-4 md:w-1/3 w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-2">JavaScript</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-green-500 h-4 rounded-full"
                  style={{ width: '85%' }}
                ></div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="p-4 md:w-1/3 w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-2">React</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-yellow-500 h-4 rounded-full"
                  style={{ width: '75%' }}
                ></div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="p-4 md:w-1/3 w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Node.js</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-blue-800 h-4 rounded-full"
                  style={{ width: '65%' }}
                ></div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="p-4 md:w-1/3 w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Next.js</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-purple-800 h-4 rounded-full"
                  style={{ width: '80%' }}
                ></div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-2">CSS</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-pink-500 h-4 rounded-full"
                  style={{ width: '90%' }}
                ></div>
              </div>
            </div>

            <div className="p-4 md:w-1/3 w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-2">Tailwind CSS</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-red-500 h-4 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>

            {/* Skill 5 */}
            <div className="p-4 md:w-1/3 w-full">
              <h2 className="text-lg font-medium text-gray-900 mb-2">TypeScript</h2>
              <div className="w-full bg-gray-200 rounded-full h-4 mb-4">
                <div
                  className="bg-orange-500 h-4 rounded-full"
                  style={{ width: '70%' }}
                ></div>
              </div>
            </div>
          </div>
        </div>
        
      </section>
      </div>
  );
}

export default Skills;
