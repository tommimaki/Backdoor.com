// components/UnfinishedProjectPage.js
import React, { useState } from "react";
import Layout from "./Layout";
import ProjectCarousel from "./ProjectCarousel";
import dynamic from "next/dynamic";
import { parseISO, format } from "date-fns";
import SmoothDropdown from "./SmoothDropdown";
import Timeline from "./Timeline";

const DynamicLeafletMap = dynamic(() => import("../components/LeafletMap"), {
  ssr: false,
});

const InConstructionSingle = ({ project }) => {
  const [showFullDescription, setShowFullDescription] = useState(false);
  return (
    <Layout>
      <div className="wrapper pt-20 ">
        <div className="container min-h-screen mx-auto ">
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
            Project Details :
          </h3>
          <div className="flex items-center justify-center h-full">
            <ul className="grid grid-cols-2 gap-2 ">
              <li className="flex gap-1">
                <p>
                  Address: <br /> <b>{project.address}</b>
                </p>
              </li>
              <li className="flex gap-1">
                <p>
                  Finishing date:
                  <br />
                  <b>{format(parseISO(project.finishingDate), "MM/yyyy")}</b>
                </p>
              </li>
              <li className="flex gap-1">
                <p>
                  Location:
                  <br /> <b>{project.location}</b>
                </p>
              </li>
              <li className="flex gap-1">
                <p>
                  Number of apartments:
                  <br /> <b>{project.numberOfApartments}</b>
                </p>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex  p-10 w-full flex-grow-1 bg-bgDark">
          <div className="container mx-auto">
            <div className="flex">
              <div className="w-1/2 h-full">
                <Timeline finishingDate={project.finishingDate} />
              </div>
              <div className="w-1/2 h-full">
                <DynamicLeafletMap location={project} />
              </div>
            </div>
          </div>
        </div>
        <div className="bg-bgLight  mx-20">
          {project && <ProjectCarousel project={project} />}
        </div>
      </div>
    </Layout>
  );
};

export default InConstructionSingle;
