/* eslint-disable react/no-unescaped-entities */
import React from "react";

import ProjectCarousel from "./ProjectCarousel";
export default function Sites() {
  return (
    <div className="min-h-screen flex items-center bg-gray-100 justify-center">
      <div className="container grid grid-cols-2 gap-5 h-full">
        {/* Left column: Carousel */}
        <div className="carousel h-full mt-32  flex-1">
          <ProjectCarousel />
        </div>

        {/* Right column: Text content */}
        <div className="text-content  flex flex-col justify-center ">
          <div className="bg-white p-8 rounded-lg shadow-lg ">
            <h1 className="text-5xl text-amber-950 text-center font-bold mb-8">
              Our Current Projects
            </h1>
            <a
              class="block rounded-xl border border-gray-800 bg-green-700 mb-2 p-4 shadow-xl sm:p-6 lg:p-8"
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 class="mt-3 text-lg font-bold text-white sm:text-xl">
                Lorem, ipsum dolor.
              </h3>

              <p class="mt-4 text-md text-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                eius labore nisi tempore modi vel voluptate ullam nostrum
                adipisci suscipit eaque quae cupiditate, accusamus minus
                laboriosam totam laborum, deserunt sint.
              </p>
            </a>
            <a
              class="block rounded-xl border border-gray-800 bg-green-700 mb-2 p-4 shadow-xl sm:p-6 lg:p-8"
              href=""
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-10 w-10 text-blue-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                />
              </svg>

              <h3 class="mt-3 text-lg font-bold text-white sm:text-xl">
                Lorem, ipsum dolor.
              </h3>

              <p class="mt-4 text-md text-gray-100">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odio
                eius labore nisi tempore modi vel voluptate ullam nostrum
                adipisci suscipit eaque quae cupiditate, accusamus minus
                laboriosam totam laborum, deserunt sint.
              </p>
            </a>

            <p className="mb-4 border-2  border-green-800 p-4 text-lg ">
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
