import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-black py-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start space-y-8 md:space-y-0">
          {/* Logo Section */}
          <div className="flex items-center justify-center md:justify-start mb-6 md:mb-0 ">
            <img
              src="/src/assets/logo-1.png" // Replace with your logo URL
              alt="Logo"
              className="w-40 h-auto rounded-full"
            />
        
          </div>

          {/* Links Section */}
          <div className="flex flex-col md:flex-row md:space-x-40 space-y-6 md:space-y-0">
            {/* Company Links */}
            <div className="space-y-4 text-left md:text-left">
              <h3 className="text-xl font-semibold text-black">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
    <div className="space-y-4 text-left md:text-left">
              <h3 className="text-xl font-semibold text-black">Company</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/about"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    href="/careers"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="/privacy-policy"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="/terms"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Terms of Service
                  </a>
                </li>
                <li>
                  <a
                    href="/blog"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Blog
                  </a>
                </li>
                <li>
                  <a
                    href="/news"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    News
                  </a>
                </li>
              </ul>
            </div>
            {/* Quick Links */}
            <div className="space-y-4 text-left md:text-left">
              <h3 className="text-xl font-semibold text-black">Quick Links</h3>
              <ul className="space-y-3">
                <li>
                  <a
                    href="/shop"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Shop
                  </a>
                </li>
                <li>
                  <a
                    href="/contact"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Contact Us
                  </a>
                </li>
                <li>
                  <a
                    href="/faq"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    FAQ
                  </a>
                </li>
                <li>
                  <a
                    href="/support"
                    className="text-gray-600 hover:text-yellow-300 transition duration-300"
                  >
                    Support
                  </a>
                </li>
              </ul>
            </div>

            {/* Social Media Links */}
            <div className="space-y-4 text-left md:text-left">
              <h3 className="text-xl font-semibold text-black">Follow Us</h3>
              <div className="flex justify-center md:justify-start space-x-8">
                <a
                  href="https://facebook.com"
                  className="text-gray-800 hover:text-yellow-300 transition duration-300"
                >
                  <FaFacebook size={30} />
                </a>
                <a
                  href="https://twitter.com"
                  className="text-gray-800 hover:text-yellow-300 transition duration-300"
                >
                  <FaTwitter size={30} />
                </a>
                <a
                  href="https://instagram.com"
                  className="text-gray-800 hover:text-yellow-300 transition duration-300"
                >
                  <FaInstagram size={30} />
                </a>
                <a
                  href="https://linkedin.com"
                  className="text-gray-800 hover:text-yellow-300 transition duration-300"
                >
                  <FaLinkedin size={30} />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Copyright Section */}
        <div className="mt-12 text-center">
          <p className="text-sm text-gray-600">
            &copy; {new Date().getFullYear()} Your Brand. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
