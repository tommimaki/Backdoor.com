// components/ProjectPage.js
import React from "react";
import Layout from "./Layout";

const ProjectPage = ({ project }) => {
  console.log(project);
  return (
    <Layout>
      <div className="wrapper bg-green-400">
        <div className="container min-h-screen mx-auto pt-20 p-4">
          <h1 className="text-4xl font-bold mb-4">{project.title}</h1>
          <img
            src={project.images[0]}
            alt={project.title}
            className="w-full h-full object-cover mb-4"
          />
          <p className="mb-4">{project.description}</p>
          {/* Add other project details here */}
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-2 py-3">
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
                    className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                  >
                    <th
                      scope="row"
                      className="px-2 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
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
