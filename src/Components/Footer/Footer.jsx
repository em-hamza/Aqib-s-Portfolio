import { div } from "framer-motion/client";
import React from "react";
import { FaLinkedin, FaEnvelope, FaPhone, FaMapMarkerAlt, FaCode, FaFacebook, FaSkype } from "react-icons/fa";

const Footer = () => {
  return (
   <div className="h-[510px]">
    <footer className="bg-black z-0 fixed bottom-0 left-0  w-full text-gray-300 py-32">
      <div className="max-width p-4 md:px-12">
        {/* Flexbox Layout */}
        <div className="w-full flex justify-between">
          {/* About Section */}
          <div className="w-3/12 md:w-1/4">
            <h2 className="text-4xl font-bold text-yellow-500">Aqib Ali</h2>
            <p className="text-base text-gray-400 mt-2 leading-6">
              Passionate Web Developer & Designer, crafting modern and responsive web experiences.
            </p>
          </div>

          <div className="w-7/12 flex justify-between">
          {/* Quick Links */}
          
          <div className="w-1/4 md:w-1/4">
            <h3 className="text-xl font-semibold text-white">Quick Links</h3>
            <ul className="mt-3 space-y-2">
              <li><a href="#home" className="hover:text-yellow-500">Home</a></li>
              <li><a href="#about" className="hover:text-yellow-500">About</a></li>
              <li><a href="#projects" className="hover:text-yellow-500">Projects</a></li>
              <li><a href="#contact" className="hover:text-yellow-500">Contact</a></li>
            </ul>
          </div>

          {/* Services Section */}
          <div className="w-1/4 md:w-1/4">
            <h3 className="text-xl font-semibold text-white">Services</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center">Web Development</li>
              <li className="flex items-center">UI/UX Design</li>              
              <li className="flex items-center">Responsive Design</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-1/4 md:w-1/4">
            <h3 className="text-xl font-semibold text-white">Get in Touch</h3>
            <ul className="mt-3 space-y-2">
              <li className="flex items-center"><FaEnvelope className="mr-2" /> aqibali@example.com</li>
              <li className="flex items-center"><FaPhone className="mr-2" /> +123 456 7890</li>
              <li className="flex items-center"><FaMapMarkerAlt className="mr-2" /> Lahore, Pakistan</li>
            </ul>
          </div>
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
