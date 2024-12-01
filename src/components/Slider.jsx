import React, { useState, useEffect } from "react";
import bannerImg1 from "../assets/img-1.svg"; // Update with the correct image paths
import bannerImg2 from "../assets/img-2.svg";

const Slider = () => {
  // List of banner images
  const slides = [bannerImg1, bannerImg2];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);

    return () => clearInterval(interval); // Cleanup interval on unmount
  }, [slides.length]);

  return (
    <div className="relative w-full overflow-hidden">
      {/* Slider Images */}
      <div
        className="flex transition-transform duration-1000 ease-in-out"
        style={{
          transform: `translateX(-${currentIndex * 100}%)`,
        }}
      >
        {slides.map((slide, index) => (
          <img
            key={index}
            src={slide}
            alt={`Slide ${index + 1}`}
            className="w-full h-full object-cover"
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
