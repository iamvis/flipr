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
      {/* Background Section with Text and Button */}
      <div
        className="bg-gray-100 relative"
        style={{
          backgroundImage: `url(${rec})`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '500px',
          paddingBottom: '50px',
        }}
      >
        <div className="container mx-auto h-full flex flex-col justify-center items-center text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 max-w-2xl mb-6">
            Learn more about our listing process, as well as our additional staging and design work.
          </h2>
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-md shadow-md"
            onClick={() => {
              // Add your button click logic here
            }}
          >
            Learn More
          </button>
        </div>
      </div>

      {/* Navigation and Subscription Section */}
      <div className="bg-blue-500 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <nav className="flex  space-x-4 text-white">
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

          <div className="flex justify-center items-center">
          <img src={Logo} alt="Company Logo" className="h-10 md:h-12" /> {/* Adjusted height */}
        </div>
          <div className="flex space-x-4 text-white">
            {/* Social Media Icons */}
            <a href="#" className="hover:text-white">
              <img src={twiter} alt="tw"  />
            </a>
            <a href="#" className="hover:text-white">
            <img src={fb} alt="fb" />
            </a>
            <a href="#" className="hover:text-white">
            <img src={insta} alt="inst" />
            </a>
            <a href="#" className="hover:text-white">
            <img src={Linkdin} alt="tw" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
