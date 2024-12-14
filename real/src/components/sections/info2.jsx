import React from "react";
import h from "../../assests/home.svg";
import p from "../../assests/paintbrush-2.svg";
import d from "../../assests/circle-dollar-sign.svg";

const Info2 = () => {
  return (
    <div className="mt-16 text-center pb-24 bg-gray-50">
      <h3 className="text-3xl font-extrabold text-blue-700">Why Choose Us?</h3>
      <div className="w-24 h-1 bg-blue-700 mx-auto mt-2 transition-all duration-500"></div>

      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12">
        <div className="text-center transition-transform duration-500 hover:scale-105">
          <div className="flex justify-center mb-6">
            <img
              src={h}
              alt="Potential ROI"
              className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 hover:rotate-6"
            />
          </div>
          <h4 className="text-xl font-bold text-gray-800">Maximize ROI</h4>
          <p className="text-gray-600 mt-4 px-4 sm:px-6">
            Whether you're buying or investing, we ensure the best possible returns by identifying market opportunities and delivering value-driven strategies.
          </p>
        </div>

        <div className="text-center transition-transform duration-500 hover:scale-105">
          <div className="flex justify-center mb-6">
            <img
              src={p}
              alt="Design"
              className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 hover:rotate-6"
            />
          </div>
          <h4 className="text-xl font-bold text-gray-800">Innovative Design</h4>
          <p className="text-gray-600 mt-4 px-4 sm:px-6">
            Our creative designs bring your property to life, making it stand out in the market and appealing to potential buyers.
          </p>
        </div>

        <div className="text-center transition-transform duration-500 hover:scale-105">
          <div className="flex justify-center mb-6">
            <img
              src={d}
              alt="Marketing"
              className="w-16 h-16 sm:w-20 sm:h-20 transition-transform duration-300 hover:rotate-6"
            />
          </div>
          <h4 className="text-xl font-bold text-gray-800">Targeted Marketing</h4>
          <p className="text-gray-600 mt-4 px-4 sm:px-6">
            Using advanced digital tools, we strategically market your property to attract the right audience quickly and effectively.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Info2;
