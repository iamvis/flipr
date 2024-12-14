import React, { useState, useEffect, useRef } from "react";
import e1 from "../../assests/Ellipse11.svg";
import e2 from "../../assests/Ellipse12.svg";
import e3 from "../../assests/Ellipse13.svg";

const Info = () => {
  const [isVisible, setIsVisible] = useState(false); // State to track visibility
  const sectionRef = useRef(null); // Ref to the section

  // Intersection Observer to detect when the section enters the viewport
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true); // Trigger the animation when section is in view
        }
      },
      {
        threshold: 0.5, // Trigger when 50% of the element is visible
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Cleanup observer on component unmount
    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  return (
    <div className="bg-white py-16 px-6">
      {/* Not Your Average Realtor Section */}
      <div
        ref={sectionRef}
        className="flex flex-col md:flex-row items-center justify-center md:space-x-8"
      >
        {/* Text Content: Center-Aligned */}
        <div
          className={`md:w-1/2 text-center flex flex-col items-center mb-8 md:mb-0 transition-all duration-300 ${
            isVisible ? "animate-slide-left" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 mb-4">
            Not Your Average Realtor
          </h2>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Real results are key for selling properties. Advanced staging designs and
            effective marketing help get maximum value quickly and efficiently.
          </p>
        </div>

        {/* Image Grid: Styled and Enlarged */}
        <div className="md:w-1/2 flex justify-center mt-8 md:mt-0">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* First Image */}
            <div
              className={`flex justify-center transform transition-transform duration-300 ${
                isVisible ? "animate-slide-left" : "opacity-0"
              }`}
            >
              <img
                src={e1}
                alt="Happy clients"
                className="rounded-lg w-60 h-60 object-cover shadow-lg hover:scale-105"
              />
            </div>
            {/* Second Image */}
            <div
              className={`flex justify-center transform transition-transform duration-300 ${
                isVisible ? "animate-slide-left animation-delay-200" : "opacity-0"
              }`}
            >
              <img
                src={e2}
                alt="Man holding a blueprint"
                className="rounded-lg w-60 h-60 object-cover shadow-lg hover:scale-105"
              />
            </div>
            {/* Third Image */}
            <div
              className={`flex justify-center transform transition-transform duration-300 ${
                isVisible ? "animate-slide-right animation-delay-400" : "opacity-0"
              }`}
            >
              <img
                src={e3}
                alt="Realtor holding a model house"
                className="rounded-lg w-60 h-60 object-cover shadow-lg hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
