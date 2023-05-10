// components/ImageCarousel.js
import React, { useState } from "react";

const ImageCarousel = ({ imageUrls }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  console.log(imageUrls);

  const handlePrev = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === 0 ? imageUrls.length - 1 : prevActiveIndex - 1
    );
  };

  const handleNext = () => {
    setActiveIndex((prevActiveIndex) =>
      prevActiveIndex === imageUrls.length - 1 ? 0 : prevActiveIndex + 1
    );
  };

  return (
    <div id="gallery" className="relative w-full" data-carousel="slide">
      <div className="relative  min-h-[300px] lg:min-h-[600px] md:min-h-[450px] overflow-hidden  ">
        {imageUrls.map((imageUrl, index) => (
          <div
            key={index}
            className={`${
              index === activeIndex ? "inline-block" : "hidden"
            } duration-700 ease-in-out`}
          >
            <img
              src={imageUrl}
              className="absolute inline-block w-full h-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
              alt="apartment"
            />
          </div>
        ))}
      </div>
      <button
        type="button"
        className="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handlePrev}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent  group-hover:bg-bgLight group-focus:ring-4 group-focus:ring-white  group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-8 h-8 text-accent"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button
        type="button"
        className="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none"
        onClick={handleNext}
      >
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-accent  group-hover:bg-bgLight group-focus:ring-4 group-focus:ring-white group-focus:outline-none">
          <svg
            aria-hidden="true"
            className="w-6 h-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  );
};

export default ImageCarousel;
