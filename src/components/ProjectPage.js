// components/ProjectPage.js
import React from "react";
import Layout from "./Layout";

const ProjectPage = ({ project }) => {
  console.log(project);
  return (
    <Layout>
      <div className="wrapper bg-green-400">
        <div className="container min-h-screen mx-auto  p-4">
          <h1 className="text-5xl font-extrabold mb-5">{project.title}</h1>
          <div className="relative w-full h-full mb-4 overflow-hidden">
            <img
              src={project.images[0]}
              alt={project.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute left-1/2 bottom-0 w-4/5 p-6 h-56 bg-white bg-opacity-90 transform -translate-x-1/2 rounded-t-xl">
              <p className="text-xl text-center">{project.description}</p>
            </div>
          </div>
          {/* Add other project details here */}

          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <h2 className="text-3xl mb-3">Available Apartments</h2>
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
                      <button className="greenButton "> See Apartment</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ProjectPage;
