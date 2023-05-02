/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";
import axios from "axios";

import ProjectCarousel from "./ProjectCarousel";

export default function Sites() {
  const [sites, setSites] = useState([]);

  useEffect(() => {
    async function fetchSites() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}sites`
        );
        setSites(response.data);
      } catch (error) {
        console.error("Error fetching sites:", error.message);
      }
    }

    fetchSites();
  }, []);

  return (
    <div className="min-h-screen flex flex-col pb-10 items-center bg-bgLight justify-center">
      <div className="container grid grid-cols-2  gap-5 h-full">
        {/* Left column: Carousel */}
        <div className="carousel h-full mt-32 flex-1">
          <ProjectCarousel />
        </div>

        {/* Right column: Info box */}
        <div className="info-box h-full mt-32 flex-1">
          <h2 className="text-5xl font-heading text-textDark font-bold mb-16">
            Current Building Projects
          </h2>
          <p className="font-text text-xl mb-16">
            We are excited to contribute to the growth and development of the
            Helsinki and Uusimaa region through these projects, and we look
            forward to unveiling more innovative construction projects in the
            near future.
          </p>
          <button className="bg-accent text-white font-text border w-full border-accent rounded-md px-4 py-2 hover:bg-bgDark">
            See Them All
          </button>
        </div>
      </div>

      {/* Projects */}
      <div className="text-left w-full mx-auto ml-20 pt-10">
        <h2 className="font-heading text-5xl">Featured Projects </h2>
      </div>
      <div className="container grid grid-cols-2 gap-5 mt-8">
        {sites.map((site) => (
          <div key={site._id} className="bg-white shadow-lg rounded-lg p-6">
            <img
              src={site.images[0]}
              alt={site.title}
              className="w-full h-48 object-cover mb-4 rounded-lg"
            />
            <h2 className="text-2xl font-semibold text-textDark font-heading mb-4">
              {site.title}
            </h2>
            <p className="font-text text-textDark">{site.description}</p>

            <div className="mt-4">
              <h3 className="text-xl font-semibold text-textDark mb-2">
                Project Details:
              </h3>
              <ul className="grid grid-cols-2 gap-2">
                <li className="flex gap-1">
                  <p>
                    Address: <br /> <b>{site.address}</b>
                  </p>
                </li>
                <li className="flex gap-1">
                  <p>
                    Finishing date:
                    <br />{" "}
                    <b>{new Date(site.finishingDate).toLocaleDateString()}</b>
                  </p>
                </li>
                <li className="flex gap-1">
                  <p>
                    Location:
                    <br /> <b>{site.location}</b>
                  </p>
                </li>
                <li className="flex gap-1">
                  <p>
                    Number of apartments:
                    <br /> <b>{site.numberOfApartments}</b>
                  </p>
                </li>
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
//add in a bit
{
  /* <ol class="items-center sm:flex">
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.0.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 2, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.2.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on December 23, 2021</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
    <li class="relative mb-6 sm:mb-0">
        <div class="flex items-center">
            <div class="z-10 flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full ring-0 ring-white dark:bg-blue-900 sm:ring-8 dark:ring-gray-900 shrink-0">
                <svg aria-hidden="true" class="w-3 h-3 text-blue-800 dark:text-blue-300" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clip-rule="evenodd"></path></svg>
            </div>
            <div class="hidden sm:flex w-full bg-gray-200 h-0.5 dark:bg-gray-700"></div>
        </div>
        <div class="mt-3 sm:pr-8">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">Flowbite Library v1.3.0</h3>
            <time class="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Released on January 5, 2022</time>
            <p class="text-base font-normal text-gray-500 dark:text-gray-400">Get started with dozens of web components and interactive elements.</p>
        </div>
    </li>
</ol> */
}
