// components/ProjectPage.js
import React, { useState } from "react";
import Layout from "../Layout/Layout";
import VisitingDayPicker from "../Misc/VisitingDayPicker";
import dynamic from "next/dynamic";
import SmoothDropdown from "../functional/SmoothDropdown";
import ProjectCarousel from "../functional/ProjectCarousel";
import ImageCarousel from "../functional/ImageCarousel";
import Link from "next/link";

const DynamicLeafletMap = dynamic(() => import("../Misc/LeafletMap"), {
  ssr: false,
});

const ProjectPage = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);

  return (
    <Layout>
      <div className="wrapper pt-20 bg-bgLight ">
        <div className="container min-h-screen mx-auto  p-4s">
          <div className=" w-full h-full mb-4 overflow-hidden">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="text-center p-6 bg-bgDark bg-opacity-90 rounded-b-xl">
              <h1 className="text-5xl font-heading font-extrabold mb-5">
                {project.title}
              </h1>
              {project.description.split("\n").map((paragraph, index) => {
                if (!showFullDescription && index > 0) {
                  return null;
                }
                return (
                  <p key={index} className="text-xl font-text mb-4">
                    {paragraph}
                  </p>
                );
              })}
              <SmoothDropdown description={project.description} />
            </div>
          </div>

          <div className="my-10 h-44">
            <h3 className="text-3xl text-center font-heading font-semibold ">
              Project Details:
            </h3>
            <div className="flex items-center justify-center h-full">
              <ul className="grid grid-cols-2 gap-2 ">
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
                    <br />{" "}
                    <b>
                      {project.location},{project.address}
                    </b>
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="relative overflow-x-auto mb-10 mx-4 shadow-md sm:rounded-lg">
            <h2 className="text-3xl font-heading mb-4">Available Apartments</h2>
            <table className="w-full text-sm text-left text-gray-500 ">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 ">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Apt
                  </th>
                  <th scope="col" className="px-2 py-3">
                    type
                  </th>
                  <th scope="col" className="px-2 py-3">
                    m²
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Selling Price
                  </th>
                  <th scope="col" className="px-2 py-3">
                    Floor
                  </th>
                  <th scope="col" className="px-2 py-3"></th>
                </tr>
              </thead>
              <tbody>
                {project.apartments.map((apartment, index) => (
                  <tr
                    key={index}
                    className="bg-white border-b hover:bg-gray-50"
                  >
                    <th
                      scope="row"
                      className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap "
                    >
                      {apartment.title}
                    </th>
                    <td className="px-2 py-4">{apartment.description}</td>
                    <td className="px-2 py-4">{apartment.area} m²</td>
                    <td className="px-2 py-4">${apartment.sellingPrice}</td>
                    <td className="px-2 py-4">{apartment.floor}</td>
                    <td className="px-2 py-4">
                      {" "}
                      <Link href={`/apartment/${apartment._id}`}>
                        <button className="orangeButton"> See Apartment</button>
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="flex flex-col sm:flex-row p-10 bg-bgDark">
          <div className="w-full sm:w-1/2 pr-0 sm:pr-4 mb-4 sm:mb-0">
            <VisitingDayPicker />
          </div>
          <div className="w-full sm:w-1/2 h-full">
            <DynamicLeafletMap location={project} />
          </div>
        </div>

        <div className="bg-bgLight sm:mx-210 ">
          <ImageCarousel imageUrls={project.images} />
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
