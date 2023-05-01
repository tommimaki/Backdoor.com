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
            <div
              class="block rounded-xl border border-gray-800 bg-green-700 mb-2 p-4 shadow-xl sm:p-6 lg:p-8"
              href=""
            >
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="h-10 w-10 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 21v-8.25M15.75 21v-8.25M8.25 21v-8.25M3 9l9-6 9 6m-1.5 12V10.332A48.36 48.36 0 0012 9.75c-2.551 0-5.056.2-7.5.582V21M3 21h18M12 6.75h.008v.008H12V6.75z"
                    />
                  </svg>
                  <h3 class="mt-3 text-lg flex font-bold text-white sm:text-xl">
                    Kallio Revival
                  </h3>
                </div>
                <button className="greenButton ">View</button>
              </div>

              <p class="mt-4 text-md text-gray-100">
                We are proud to be working on several exciting construction
                projects in the Helsinki and Uusimaa region. One of our most
                prominent projects is the development of a modern residential
                complex in the heart of Helsinki. This project, named "Kotka
                Towers," features energy-efficient apartments with a range of
                smart home technologies and green spaces for residents to enjoy.
              </p>
            </div>
            <div class="block rounded-xl border border-gray-800 bg-green-700 mb-2 p-4 shadow-xl sm:p-6 lg:p-8">
              <div className="flex justify-between">
                <div className="flex items-center gap-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    class="h-10 w-10 text-blue-400"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                    />
                  </svg>
                  <h3 class="mt-3 text-lg flex font-bold text-white sm:text-xl">
                    Kotka towers
                  </h3>
                </div>
                <button className="greenButton ">View</button>
              </div>

              <p class="mt-4 text-md text-gray-100">
                In addition to Kotka Towers, we are also working on the
                renovation of a historic building in the bustling district of
                Kallio. Our team is dedicated to preserving the architectural
                integrity of the building while updating its interiors to meet
                the needs of modern urban living. This project, dubbed "Kallio
                Revival," will provide a mix of residential and commercial
                spaces, including trendy cafes, artisan shops, and co-working
                facilities.
              </p>
            </div>
            <div
              class="block rounded-xl border border-gray-800 bg-green-700 mb-2 p-4 shadow-xl sm:p-2 lg:p-4"
              href=""
            >
              <p class="text-md text-gray-100">
                We are excited to contribute to the growth and development of
                the Helsinki and Uusimaa region through these projects, and we
                look forward to unveiling more innovative construction projects
                in the near future.
              </p>
            </div>
            <button className="greenButton mt-10 w-full">See Them All</button>
          </div>
        </div>
      </div>
    </div>
  );
}
