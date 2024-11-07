import React from 'react';

function Project() {
  return (
    <div id='projects'>
    <section className="text-gray-600 body-font border-t border-blue-700">
      <div className="container px-5 py-16 mx-auto"> {/* Reduced py-24 to py-16 */}
        <div className="flex flex-col text-center w-full mb-16"> {/* Reduced mb-20 to mb-16 */}
          <h1 className="sm:text-3xl w-xl text-2xl font-bold title-font mb-4 text-gray-900 underline">
            MY PROJECTS
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-black">
            Each project represents my dedication to creating innovative,
            <br />
            user-focused solutions that balance aesthetics and functionality.
          </p>
        </div>
        
        <div className="flex flex-wrap -m-4 items-stretch"> 
          {/* Project 1 */}
          <div className="lg:w-1/2 sm:w-1/2 p-2"> 
            <div className="flex flex-col items-center relative border-2 border-gray-200 bg-white p-4 h-full"> {/* Reduced padding and border size */}
              <img
                alt="gallery"
                width={100}
                height={150} 
                src="./project1.jpg"
              />
              <div className="text-center mt-3"> {/* Reduced top margin */}
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  Tic Tac Toe Game
                </h2>
                <h1 className="title-font text-base font-medium text-gray-900 mb-2"> {/* Reduced font size and margin */}
                  This is my Tic Tac Toe game project.
                </h1>
                <div className="flex space-x-2 mt-1"> {/* Reduced margin */}
                  <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Node
                  </span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    HTML
                  </span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Javascript
                  </span>
                  <span className="bg-purple-200 text-red-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    CSS
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="lg:w-1/2 sm:w-1/2 p-1 ">
            <div className="flex flex-col items-center relative border-2 border-gray-200 bg-white p-4 h-full">
              <img
                alt="gallery"
                width={300}
                height={150}
                src="./project2.jpg"
              />
              <div className="text-center mt-3">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  Resume project
                </h2>
                <h1 className="title-font text-base font-medium text-gray-900 mb-2">
                  This is my resume  project.
                </h1>
                <div className="flex space-x-2 mt-1">
                  <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Node
                  </span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    HTML
                  </span>
                  <span className="bg-purple-200 text-red-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    CSS
                  </span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="lg:w-1/2 sm:w-1/2 p-2">
            <div className="flex flex-col items-center relative border-2 border-gray-200 bg-white p-4 h-full">
              <img
                alt="gallery"
                width={300}
                height={150}
                src="./project3.jpg"
              />
              <div className="text-center mt-3">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  Todo-App
                </h2>
                <h1 className="title-font text-base font-medium text-gray-900 mb-2">
                  This is my Todo-App project.
                </h1>
                <div className="flex space-x-2 mt-1">
                  <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Node
                  </span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Next.js
                  </span>
                  <span className="bg-blue-200 text-red-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    CSS
                  </span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="lg:w-1/2 sm:w-1/2 p-2">
            <div className="flex flex-col items-center relative border-2 border-gray-200 bg-white p-4 h-full">
              <img
                alt="gallery"
                width={300}
                height={150}
                src="./project4.jpg"
              />
              <div className="text-center mt-3">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  Coun-Down Timer
                </h2>
                <h1 className="title-font text-base font-medium text-gray-900 mb-2">
                  This is my count down project.
                </h1>
                <div className="flex space-x-2 mt-1">
                  <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Node
                  </span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Next.js
                  </span>
                  <span className="bg-blue-200 text-red-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    CSS
                  </span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Project 5 */}
          <div className="lg:w-1/2 sm:w-1/2 p-2">
            <div className="flex flex-col items-center relative border-2 border-gray-200 bg-white p-4 h-full">
              <img
                alt="gallery"
                width={300}
                height={150}
                src="./site.jpg"
              />
              <div className="text-center mt-3">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  Todo-App
                </h2>
                <h1 className="title-font text-base font-medium text-gray-900 mb-2">
                  This is my Todo-App project.
                </h1>
                <div className="flex space-x-2 mt-1">
                  <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Node
                  </span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Next.js
                  </span>
                  <span className="bg-blue-200 text-red-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    CSS
                  </span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* Project 6 */}
          <div className="lg:w-1/2 sm:w-1/2 p-2">
            <div className="flex flex-col items-center relative border-2 border-gray-200 bg-white p-4 h-full">
              <img
                alt="gallery"
                width={300}
                height={150}
                src="./website.jpg"
              />
              <div className="text-center mt-3">
                <h2 className="tracking-widest text-xs title-font font-medium text-indigo-500 mb-1">
                  Todo-App
                </h2>
                <h1 className="title-font text-base font-medium text-gray-900 mb-2">
                  This is my Todo-App project.
                </h1>
                <div className="flex space-x-2 mt-1">
                  <span className="bg-green-200 text-green-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Node
                  </span>
                  <span className="bg-blue-200 text-blue-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    Next.js
                  </span>
                  <span className="bg-blue-200 text-red-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    CSS
                  </span>
                  <span className="bg-purple-200 text-purple-800 px-2 py-0.5 rounded-full text-xs font-medium">
                    TypeScript
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Project;
