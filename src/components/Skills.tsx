"use client";
import React from "react";

function Skills() {
  return (
    <div id="skills">
      <section className="bg-gray-800 text-gray-200 body-font py-24">
        <div className="container mx-auto px-6 md:px-12">
          <h1 className="text-center title-font sm:text-5xl text-4xl mb-6 font-extrabold text-yellow-400">
            My Skills
          </h1>
          <div className="flex flex-wrap -m-4">
            {/* Skill 1 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">JavaScript</h2>
                <div className="w-full bg-gray-500 rounded-full h-2 mb-4">
                  <div className="bg-green-500 h-2 rounded-full" style={{ width: "85%" }}></div>
                </div>
              </div>
            </div>

            {/* Skill 2 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">React</h2>
                <div className="w-full bg-gray-500 rounded-full h-2 mb-4">
                  <div className="bg-yellow-500 h-2 rounded-full" style={{ width: "75%" }}></div>
                </div>
              </div>
            </div>

            {/* Skill 3 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">Node.js</h2>
                <div className="w-full bg-gray-500 rounded-full h-2 mb-4">
                  <div className="bg-blue-800 h-2 rounded-full" style={{ width: "65%" }}></div>
                </div>
              </div>
            </div>

            {/* Skill 4 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">Next.js</h2>
                <div className="w-full bg-gray-500 rounded-full h-2 mb-4">
                  <div className="bg-purple-800 h-2 rounded-full" style={{ width: "80%" }}></div>
                </div>
              </div>
            </div>

            {/* Skill 5 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">CSS</h2>
                <div className="w-full bg-gray-500 rounded-full h-2 mb-4">
                  <div className="bg-pink-500 h-2 rounded-full" style={{ width: "90%" }}></div>
                </div>
              </div>
            </div>

            {/* Skill 6 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">Tailwind CSS</h2>
                <div className="w-full bg-gray-500 rounded-full h-2 mb-4">
                  <div className="bg-red-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>

            {/* Skill 7 */}
            <div className="p-4 md:w-1/3 w-full">
              <div className="h-full bg-gray-700 p-6 rounded-xl shadow-lg transform transition duration-300 hover:scale-105">
                <h2 className="text-xl font-semibold text-yellow-400 mb-3">TypeScript</h2>
                <div className="w-full bg-gray-500 rounded-full h-2 mb-4">
                  <div className="bg-orange-500 h-2 rounded-full" style={{ width: "70%" }}></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Skills;
