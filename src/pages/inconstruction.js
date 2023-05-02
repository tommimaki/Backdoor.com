import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";
import Sites from "../components/Sites";

const UnfinishedProjects = () => {
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
    <div id="unfinishedProjects" className="bg-bgDark w-full flex-grow z-0">
      <div className="wrapper flex flex-col ">
        <div className="container mx-auto p-4 z-10">
          <h1 className="text-7xl font-heading text-textDark font-bold mb-8">
            Unfinished Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {sites.map((site) => (
              <Link key={site._id} href={`/inconstruction/${site._id}`}>
                {site.title}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UnfinishedProjects;
