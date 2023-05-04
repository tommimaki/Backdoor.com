// components/Filter.js
import React from "react";

const Filter = ({ onFilterChange }) => {
  const handleChange = (e) => {
    onFilterChange(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-wrap gap-4 mb-8">
      <div>
        <label htmlFor="price" className="mr-2">
          Max Price (€):
        </label>
        <input
          type="number"
          name="price"
          id="price"
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="area" className="mr-2">
          Max Area (m²):
        </label>
        <input
          type="number"
          name="area"
          id="area"
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
      </div>
      <div>
        <label htmlFor="location" className="mr-2">
          Location:
        </label>
        <input
          type="text"
          name="location"
          id="location"
          onChange={handleChange}
          className="border border-gray-300 px-2 py-1 rounded-md"
        />
      </div>
    </div>
  );
};

export default Filter;
