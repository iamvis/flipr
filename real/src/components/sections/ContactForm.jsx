import React, { useState } from "react";
import youngimg from "../../assests/young.svg";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    phone: "",
    areaCity: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form data:", formData);
  };

  return (
    <div
      className="flex items-center min-h-screen bg-gray-100 relative"
      style={{
        backgroundImage: `url(${youngimg})`,
        backgroundSize: "cover",
        height: "120vh",
      }}
    >
      <div
        className="absolute inset-0 bg-black opacity-50"
        style={{ zIndex: 1 }}
      ></div>

      <div className="container mx-auto flex justify-between relative z-10">
        <div className="w-full md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h4 className="text-2xl mt-40 sm:text-4xl md:text-5xl font-bold text-white mb-6">
            Consultation, <br />
            Design, & Marketing
          </h4>
          <p className="text-white">
            We offer expert consultation, creative design, and strategic
            marketing to elevate your brand and success.
          </p>
        </div>

        <div className="bg-blue-900 p-6 rounded-lg shadow-md w-full max-w-md">
          <h2 className="text-2xl font-bold mb-4 text-white">
            Get a Free Consultation
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label
                htmlFor="fullName"
                className="block text-sm font-medium text-white"
              >
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block text-sm font-medium text-white"
              >
                Enter Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your email"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="phone"
                className="block text-sm font-medium text-white"
              >
                Mobile Number
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your mobile number"
              />
            </div>
            <div className="mb-4">
              <label
                htmlFor="areaCity"
                className="block text-sm font-medium text-white"
              >
                Area, City
              </label>
              <input
                type="text"
                id="areaCity"
                name="areaCity"
                value={formData.areaCity}
                onChange={handleChange}
                className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                placeholder="Enter your area and city"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-orange-500 text-white py-5 px-4 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Get Quote
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
