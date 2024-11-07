import React from "react";

function Contact() {
  return (
    <div id="contact">
      <section className="bg-gray-900 text-gray-200 body-font py-24">
        <div className="container mx-auto px-6 md:px-12">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-yellow-400 underline">
              Contact
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-gray-300">
              Feel free to contact me.
            </p>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <div className="flex flex-wrap -m-2">
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="name" className="leading-7 text-sm text-gray-400">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-500 focus:border-yellow-400 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-400 text-base outline-none text-gray-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-1/2">
                <div className="relative">
                  <label htmlFor="email" className="leading-7 text-sm text-gray-400">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-500 focus:border-yellow-400 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-400 text-base outline-none text-gray-200 py-2 px-3 leading-8 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <div className="relative">
                  <label htmlFor="message" className="leading-7 text-sm text-gray-400">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    className="w-full bg-gray-800 bg-opacity-50 rounded border border-gray-500 focus:border-yellow-400 focus:bg-gray-900 focus:ring-2 focus:ring-yellow-400 h-32 text-base outline-none text-gray-200 py-2 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                  />
                </div>
              </div>
              <div className="p-2 w-full">
                <button className="flex mx-auto text-white bg-yellow-400 border-0 py-2 px-8 focus:outline-none hover:bg-yellow-500 transition-colors duration-300 rounded text-lg shadow-md">
                  Send Message
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Contact;
