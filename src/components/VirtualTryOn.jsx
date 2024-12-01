import React from "react";
import virtualImg from "../assets/virtual-img.svg";
const VirtualTryOn = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-purple-100 via-gray-100 to-indigo-50">
      {/* Section Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-extrabold text-gray-800">
          Virtual Try-On Experience
        </h2>
        <p className="mt-4 text-lg text-gray-600">
          See yourself in your favorite outfits before you buy. Try it now!
        </p>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center px-8 md:px-16">
        {/* Left Content - Image */}
        <div className="flex justify-center">
          <img
            src={virtualImg}
            alt="Virtual Try-On"
            className="rounded-lg bg-transparentshadow-2xl w-full md:w-3/4 lg:w-2/3"
          />
        </div>

        {/* Right Content - Features */}
        <div className="space-y-6">
          <h3 className="text-2xl font-semibold text-gray-700">
            Why Choose Virtual Try-On?
          </h3>
          <ul className="space-y-4">
            <li className="flex items-start">
              <span className="bg-purple-500 text-white rounded-full p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <p className="text-gray-600">
                Visualize outfits in real-time with advanced AI.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-500 text-white rounded-full p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <p className="text-gray-600">
                Perfect fit guaranteed before placing your order.
              </p>
            </li>
            <li className="flex items-start">
              <span className="bg-purple-500 text-white rounded-full p-2 mr-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                  stroke="currentColor"
                  className="w-5 h-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M5 13l4 4L19 7"
                  />
                </svg>
              </span>
              <p className="text-gray-600">
                Explore a wide range of styles and designs effortlessly.
              </p>
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-purple-600 text-white font-medium text-lg rounded-full shadow-md hover:bg-purple-700 transition">
            Try Now
          </button>
        </div>
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <h4 className="text-2xl font-semibold text-gray-700">
          Ready to upgrade your shopping experience?
        </h4>
        <p className="mt-4 text-gray-600">
          Experience the future of fashion with our Virtual Try-On. No more
          guesswork!
        </p>
        <button className="mt-6 px-8 py-3 bg-indigo-500 text-white font-medium text-lg rounded-full shadow-md hover:bg-indigo-600 transition">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default VirtualTryOn;
