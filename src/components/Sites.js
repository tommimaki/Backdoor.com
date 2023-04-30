import React from "react";
import ProjectCarousel from "./ProjectCarousel";
export default function Sites() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="container grid grid-cols-2 gap-5 h-full">
        {/* Left column: Carousel */}
        <div className="carousel h-full mt-32  flex-1">
          <ProjectCarousel />
        </div>

        {/* Right column: Text content */}
        <div className="text-content  flex flex-col justify-center ">
          <div className="bg-white p-8 rounded-lg shadow-lg ">
            <h1 className="text-5xl text-green-700 text-center font-bold mb-8">
              Our Current Projects
            </h1>
            <p className="mb-4 border-2 border-green-800 p-4 text-lg ">
              We are proud to be working on several exciting construction
              projects in the Helsinki and Uusimaa region. One of our most
              prominent projects is the development of a modern residential
              complex in the heart of Helsinki. This project, named "Kotka
              Towers," features energy-efficient apartments with a range of
              smart home technologies and green spaces for residents to enjoy.
            </p>
            <p className="mb-4 border-2 border-green-800 p-4 text-lg ">
              In addition to Kotka Towers, we are also working on the renovation
              of a historic building in the bustling district of Kallio. Our
              team is dedicated to preserving the architectural integrity of the
              building while updating its interiors to meet the needs of modern
              urban living. This project, dubbed "Kallio Revival," will provide
              a mix of residential and commercial spaces, including trendy
              cafes, artisan shops, and co-working facilities.
            </p>

            <p className="border-2 p-4 border-green-800 text-lg">
              We are excited to contribute to the growth and development of the
              Helsinki and Uusimaa region through these projects, and we look
              forward to unveiling more innovative construction projects in the
              near future.
            </p>
            <button className="greenButton mt-10 w-full">See Them All</button>
          </div>
        </div>
      </div>
    </div>
  );
}
