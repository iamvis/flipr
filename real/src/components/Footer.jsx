import React from 'react';
import rec from '../assests/Ractangle.svg';
import Logo from '../assests/logo.svg';
import Linkdin from "../assests/Linkedin.svg";
import fb from "../assests/fb.svg";
import twiter from "../assests/twiter.svg";
import insta from "../assests/insta.svg";

const Footer = () => {
  return (
    <>
      {/* Background Section */}
      <div
        className="bg-gray-100 bg-cover bg-center h-[500px] pb-[50px]"
        style={{ backgroundImage: `url(${rec})` }}
      >
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-2xl mb-6">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-md"
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation and Subscription Section */}
      <div className="bg-blue-500 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <nav className="flex space-x-4 text-white">
            <a href="#" className="hover:underline">Home</a>
            <a href="#" className="hover:underline">Services</a>
            <a href="#" className="hover:underline">Projects</a>
            <a href="#" className="hover:underline">Testimonials</a>
            <a href="#" className="hover:underline">Contact</a>
          </nav>
          <div className="flex items-center space-x-2">
            <span className="text-white">Subscribe Us</span>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter Email Address"
                className="p-2 rounded-l-md border-none focus:outline-none"
              />
              <button className="bg-white text-blue-500 p-2 rounded-r-md">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Section */}
      <div className="bg-gray-900 text-gray-400 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-sm">&copy; Copyright 2023</div>
          <img src={Logo} alt="Company Logo" className="h-10 md:h-12" />
          <div className="flex space-x-4">
            <a href="#" className="hover:text-white">
              <img src={twiter} alt="Twitter" />
            </a>
            <a href="#" className="hover:text-white">
              <img src={fb} alt="Facebook" />
            </a>
            <a href="#" className="hover:text-white">
              <img src={insta} alt="Instagram" />
            </a>
            <a href="#" className="hover:text-white">
              <img src={Linkdin} alt="LinkedIn" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
