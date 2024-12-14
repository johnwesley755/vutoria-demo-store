import React from "react";
import { motion } from "framer-motion";

// Sample testimonials with user images
const testimonials = [
  {
    name: "Alice",
    feedback: "The virtual try-on feature is amazing!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/1.jpg",
  },
  {
    name: "John",
    feedback: "I love the discounts and spotlight items!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/1.jpg",
  },
  {
    name: "Sarah",
    feedback: "Great collection and user-friendly experience.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/2.jpg",
  },
  {
    name: "Mike",
    feedback: "Fast delivery and amazing customer support.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/2.jpg",
  },
  {
    name: "Sophia",
    feedback: "The shopping experience is seamless.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/3.jpg",
  },
  {
    name: "Liam",
    feedback: "Good variety of items. Highly recommended.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/3.jpg",
  },
  {
    name: "Olivia",
    feedback: "The app is so intuitive and easy to navigate.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    name: "James",
    feedback: "Quick checkout and excellent deals.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/4.jpg",
  },
  {
    name: "Charlotte",
    feedback: "Amazing customer service and great product quality!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/5.jpg",
  },
  {
    name: "Benjamin",
    feedback: "Great shopping experience, fast and easy.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    name: "Ella",
    feedback: "Love the virtual fitting room! It makes online shopping easy.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
  {
    name: "David",
    feedback: "Great app, super convenient for shopping on the go.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/6.jpg",
  },
  {
    name: "Ava",
    feedback: "The user interface is so clean and easy to navigate.",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/7.jpg",
  },
  {
    name: "Ethan",
    feedback: "Quick delivery and good product variety.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/7.jpg",
  },
  {
    name: "Chloe",
    feedback: "A seamless shopping experience with everything I need!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/8.jpg",
  },
  {
    name: "Lucas",
    feedback: "The app is easy to use, and the deals are great!",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/8.jpg",
  },
  {
    name: "Mia",
    feedback: "I love the features of this app, makes shopping so much easier!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/9.jpg",
  },
  {
    name: "Oliver",
    feedback: "Very reliable and user-friendly shopping platform.",
    rating: 4,
    image: "https://randomuser.me/api/portraits/men/9.jpg",
  },
  {
    name: "Isabella",
    feedback: "Amazing virtual try-on feature, very accurate!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/women/10.jpg",
  },
  {
    name: "Henry",
    feedback: "Best shopping experience I've had online!",
    rating: 5,
    image: "https://randomuser.me/api/portraits/men/10.jpg",
  },
];

const Testimonials = () => {
  // Create a helper function to render the star rating
  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`text-${index < rating ? "yellow" : "gray"}-400`}
      >
        ★
      </span>
    ));
  };

  return (
    <section className="py-12">
      <h2 className="text-5xl max-md:text-4xl font-bold text-center mb-6">Testimonials</h2>

      <div className="overflow-hidden">
        {/* Testimonials Slider */}
        <motion.div
          className="flex space-x-6 animate-marquee"
          initial={{ x: 0 }}
          animate={{ x: `-100%` }}
          transition={{
            repeat: Infinity,
            duration: 15, // Adjust speed of the slide
            ease: "linear",
          }}
        >
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg w-80 h-60 flex-shrink-0 transform transition-transform hover:scale-105"
            >
              <div className="flex flex-col items-center space-y-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-24 h-24 rounded-full object-cover border-4 border-gray-200"
                />
                <p className="italic text-center">"{testimonial.feedback}"</p>
                <div className="mt-4 flex justify-between items-center w-full">
                  <p className="font-bold text-center">{testimonial.name}</p>
                  <div className="text-yellow-400">
                    {renderStars(testimonial.rating)}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;
