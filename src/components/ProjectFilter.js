// components/ProjectFilter.js
import React from "react";

const ProjectFilter = ({ locations, onFilterChange }) => {
  const handleLocationClick = (location) => {
    onFilterChange("location", location);
  };

  return (
    <div className="flex flex-wrap justify-center mb-8">
      <button
        onClick={() => handleLocationClick(null)}
        className="bg-orange-500 text-white py-2 px-4 rounded-lg m-2 focus:outline-none hover:bg-orange-600"
      >
        All
      </button>
      {locations.map((location, index) => (
        <button
          key={index}
          onClick={() => handleLocationClick(location)}
          className="bg-orange-500 text-white py-2 px-4 rounded-lg m-2 focus:outline-none hover:bg-orange-600"
        >
          {location}
        </button>
      ))}
    </div>
  );
};

export default ProjectFilter;
