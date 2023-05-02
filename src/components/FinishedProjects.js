import React, { useState, useEffect } from "react";
import axios from "axios";
import Link from "next/link";

const FinishedProjects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    async function fetchSites() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}sales`
        );

        console.log(response.data);
        setProjects(response.data);
      } catch (error) {
        console.error("Error fetching sites:", error.message);
      }
    }

    fetchSites();
  }, []);

  return (
    <div
      id="finishedProjects"
      className="bg-bgDark  w-full min-h-screen flex-grow z-0"
    >
      <div className="wrapper min-h-screen flex flex-col ">
        <div className="container mx-auto p-4 z-10">
          <h1 className="text-7xl  font-heading text-textDark  font-bold mb-8">
            Finished Projects
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10">
            {projects.map((project) => (
              <Link key={project._id} href={`/project/${project._id}`}>
                <div
                  key={project.id}
                  className="bg-white shadow-lg rounded-lg p-6"
                >
                  <img
                    // src={project.image}
                    src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                    alt={project.title}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h2 className="text-2xl font-semibold mb-4">
                    {project.title}
                  </h2>
                  {/* <p>{project.description}</p> */}

                  <div className="mt-4">
                    <h3 className="text-xl  font-semibold mb-2">
                      Project Details:
                    </h3>
                    <ul className="grid grid-cols-2 gap-2">
                      <div>
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
                              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
                            />
                          </svg>
                          <p>
                            Type of house: <br /> <b>{project.buildingType}</b>
                          </p>
                        </li>
                      </div>
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
                          <br /> <b>{project.numberOfApartments}</b>
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
                            d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
                          />
                        </svg>
                        <p>
                          Number of floors:
                          <br />
                          <b> {project.floors}</b>
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
                          <br /> <b>{project.location}</b>
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FinishedProjects;
