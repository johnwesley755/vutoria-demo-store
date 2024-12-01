import React from "react";
import heroImg1 from "../assets/hero-img1.svg"; // Replace with your image paths
import heroImg2 from "../assets/hero-img2.svg";
import heroImg3 from "../assets/hero-img3.svg";
import { Link } from "react-router-dom";
const Hero = () => {
  return (
    <section className="py-8 md:py-16 px-8 md:px-16">
      {/* Section Heading */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-6xl font-bold text-black leading-tight">
          Find your style with{" "}
          <span className="text-4xl md:text-6xl leading-tight font-bold bg-gradient-to-tr from-orange-200 to-orange-300 bg-clip-text text-transparent">
            Vutoria
          </span>
        </h1>
        <p className="mt-4 text-lg text-gray-600 md:text-xl">
          Explore the finest collections for men, women, and kids. Redefine your
          style today!
        </p>
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-green-100 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
          <img
            src={heroImg1}
            alt="Men's Collection"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Men's Collection
            </h3>
            <p className="mt-2 text-gray-800">
              Elevate your wardrobe with our premium range of men's fashion.
            </p>
            <Link to='/product'
              
              className="inline-block mt-4 px-6 py-2 bg-purple-500 text-white rounded-full shadow-md hover:bg-purple-600 transition"
            >
              Shop Now
            </Link>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-pink-100 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
          <img
            src={heroImg2}
            alt="Women's Collection"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Women's Collection
            </h3>
            <p className="mt-2 text-gray-600">
              Discover elegance and style with our exclusive women's collection.
            </p>
            <a
              href="#women"
              className="inline-block mt-4 px-6 py-2 bg-indigo-500 text-white rounded-full shadow-md hover:bg-indigo-600 transition"
            >
              Shop Now
            </a>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-red-100 rounded-lg shadow-lg overflow-hidden transform transition-transform hover:scale-105">
          <img
            src={heroImg3}
            alt="Kids' Collection"
            className="w-full h-56 object-cover"
          />
          <div className="p-6">
            <h3 className="text-2xl font-semibold text-gray-800">
              Kids' Collection
            </h3>
            <p className="mt-2 text-gray-600">
              Bright and fun styles for the little ones in your life.
            </p>
            <a
              href="#kids"
              className="inline-block mt-4 px-6 py-2 bg-pink-400 text-white rounded-full shadow-md hover:bg-yellow-500 transition"
            >
              Shop Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
