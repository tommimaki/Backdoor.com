/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { parseISO, format } from "date-fns";
import ProjectCarousel from "../functional/ProjectCarousel";
import Link from "next/link";

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
    <div
      id="sites"
      className="min-h-screen flex flex-col pb-10 items-center bg-bgLight justify-center"
    >
      <div className="container grid sm:grid-cols-2  gap-5 h-full">
        {/* Left column: Carousel */}
        <div className="carousel h-full sm:mt-32  flex-1">
          <ProjectCarousel project={sites[0]} />
        </div>

        {/* Right column: Info box */}
        <div className="info-box h-full sm:mt-32 p-4 flex-1">
          <h2 className="sm:text-5xl text-3xl font-heading text-textDark font-bold mb-16">
            Current Building Projects
          </h2>
          <p className="font-text text-xl mb-16">
            We are excited to contribute to the growth and development of the
            Helsinki and Uusimaa region through these projects, and we look
            forward to unveiling more innovative construction projects in the
            near future.
          </p>
          <Link href={"/inconstruction"}>
            <button className="bg-accent text-white font-text border w-full border-accent rounded-md px-4 py-2 hover:bg-bgDark">
              See Them All
            </button>
          </Link>
        </div>
      </div>

      {/* Projects */}
      <div className="text-left w-full mx-auto ml-20 pt-10">
        <h2 className="font-heading text-2xl sm:text-5xl">Featured </h2>
      </div>
      <div className="container grid lg:grid-cols-2 grid-cols-1  p-5 sm:p-0 gap-5 mt-8">
        {sites.slice(0, 2).map((site) => (
          <div
            key={site._id}
            className="bg-white shadow-lg hover:shadow-accent flex flex-col justify-between rounded-lg p-6"
          >
            <div>
              <img
                src={site.images[0]}
                alt={site.title}
                className="w-full h-48 object-cover mb-4 rounded-lg"
              />
              <h2 className="text-2xl font-semibold text-textDark font-heading mb-4">
                {site.title}
              </h2>
              <p className="font-text text-textDark">
                {site.description.split("\n\n")[0]}
              </p>
            </div>
            <div className="mt-4">
              <h3 className="text-xl pl-10 font-semibold text-textDark mb-2">
                Project Details:
              </h3>
              <ul className="grid grid-cols-2 md:pl-12 gap-2">
                <li className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-12 accent-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M9 6.75V15m6-6v8.25m.503 3.498l4.875-2.437c.381-.19.622-.58.622-1.006V4.82c0-.836-.88-1.38-1.628-1.006l-3.869 1.934c-.317.159-.69.159-1.006 0L9.503 3.252a1.125 1.125 0 00-1.006 0L3.622 5.689C3.24 5.88 3 6.27 3 6.695V19.18c0 .836.88 1.38 1.628 1.006l3.869-1.934c.317-.159.69-.159 1.006 0l4.994 2.497c.317.158.69.158 1.006 0z"
                    />
                  </svg>

                  <p>
                    Address: <br /> <b>{site.address}</b>
                  </p>
                </li>
                <li className="flex gap-1">
                  <svg
                    viewBox="0 0 21 21"
                    fill="currentColor"
                    className="w-10 h-12 accent-icon"
                  >
                    <g fill="none" fillRule="evenodd">
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-10 h-12 accent-icon"
                        d="M4.5 2.5h12a2 2 0 012 2v11.99a2 2 0 01-2 2h-12a2 2 0 01-2-2V4.5a2 2 0 012-2zM2.659 6.5H18.5"
                      />
                      <g fill="currentColor">
                        <path d="M6.816 13.155v-1.079h.88c.668 0 1.122-.395 1.122-.972 0-.527-.415-.927-1.103-.927-.713 0-1.152.366-1.201.996H5.15C5.201 9.874 6.201 9 7.788 9c1.563 0 2.432.864 2.427 1.895-.005.854-.542 1.416-1.299 1.601v.093c.981.141 1.577.766 1.577 1.709 0 1.235-1.162 2.11-2.754 2.11S5.063 15.537 5 14.204h1.411c.044.596.552.977 1.309.977.747 0 1.27-.406 1.27-1.016 0-.625-.489-1.01-1.28-1.01zM13.516 16.227v-5.611h-.087L11.7 11.808v-1.372l1.821-1.255h1.47v7.046z" />
                      </g>
                    </g>
                  </svg>
                  <p>
                    Finishing date:
                    <br />{" "}
                    <b>{format(parseISO(site.finishingDate), "MM/yyyy")}</b>
                  </p>
                </li>
                <li className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-12 accent-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                    />
                  </svg>
                  <p>
                    Location:
                    <br /> <b>{site.location}</b>
                  </p>
                </li>
                <li className="flex gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-10 h-12 accent-icon"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z"
                    />
                  </svg>
                  <p>
                    Number of apartments:
                    <br /> <b>{site.numberOfApartments}</b>
                  </p>
                </li>
              </ul>
              <Link href={`/inconstruction/${site._id}`}>
                <button className="orangeButton w-full">See Project</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
