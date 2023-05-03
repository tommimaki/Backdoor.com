/* eslint-disable react/no-unescaped-entities */

import React, { useState, useEffect } from "react";
import axios from "axios";
import { parseISO, format } from "date-fns";
import ProjectCarousel from "./ProjectCarousel";
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
      <div className="container grid grid-cols-2  gap-5 h-full">
        {/* Left column: Carousel */}
        <div className="carousel h-full mt-32 flex-1">
          <ProjectCarousel project={sites[0]} />
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
          <Link href={"/inconstruction"}>
            <button className="bg-accent text-white font-text border w-full border-accent rounded-md px-4 py-2 hover:bg-bgDark">
              See Them All
            </button>
          </Link>
        </div>
      </div>

      {/* Projects */}
      <div className="text-left w-full mx-auto ml-20 pt-10">
        <h2 className="font-heading text-5xl">Featured </h2>
      </div>
      <div className="container grid grid-cols-2 gap-5 mt-8">
        {sites.map((site) => (
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
                    <b>{format(parseISO(site.finishingDate), "MM/yyyy")}</b>
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
