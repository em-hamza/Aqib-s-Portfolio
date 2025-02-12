import { div } from "framer-motion/client";
import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaFacebook, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="h-screen" id="footer">
      <footer className="bg-black h-screen z-0 fixed bottom-0 left-0  w-full text-gray-300 py-32">
        <div className="max-width p-4 md:px-12">
          {/* Flexbox Layout */}
          <div className="w-full flex justify-between">
            {/* About Section */}
            <div className="w-4/12">
              <h2 className="text-4xl font-bold text-yellow-500">Aqib Ali</h2>
              <p className="text-base text-gray-400 mt-2 leading-6 ">
                Passionate Web Developer & Designer, crafting modern and responsive web experiences.
              </p>
            </div>

            {/* Contact Form */}
            <div className="w-7/12">
              <h3 className="text-xl font-semibold text-white">Get in touch</h3>
              <form className="mt-3 space-y-3">
                <input type="text" placeholder="Your Name" className="w-full p-2 rounded bg-gray-800 text-white" />
                <input type="email" placeholder="Your Email" className="w-full p-2 rounded bg-gray-800 text-white" />
                <textarea placeholder="Your Message" className="w-full p-2 rounded bg-gray-800 text-white" rows="4"></textarea>
                <button type="submit" className="relative w-fit px-5 py-1 overflow-hidden border border-yellow-500 rounded-full transition-all before:absolute before:top-0 before:left-0 before:right-0 before:z-0 before:h-full before:w-0 before:bg-yellow-500 before:transition-all before:duration-500 hover:text-black hover:before:left-0 hover:before:w-full">
                  <span className="relative z-10 tracking-wide font-medium">
                    Send Message
                  </span>
                </button>
              </form>
            </div>
          </div>

          {/* Social Media & Copyright */}
          <div className="mt-10 border-t border-gray-700 pt-6 flex flex-col md:flex-row justify-between items-center text-center md:text-left">
            {/* Social Media Links */}
            <div className="flex space-x-4">
              <a href="https://github.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-xl">
                <FaFacebook />
              </a>
              <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-yellow-500 text-xl">
                <FaLinkedin />
              </a>
              <a href="mailto:aqibali@example.com" className="text-gray-400 hover:text-yellow-500 text-xl">
                <FaEnvelope />
              </a>
              <a href="mailto:aqibali@example.com" className="text-gray-400 hover:text-yellow-500 text-xl">
                <FaSkype />
              </a>
            </div>

            {/* Copyright */}
            <p className="text-gray-500 text-sm mt-4 md:mt-0">
              © {new Date().getFullYear()} Aqib Ali. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
