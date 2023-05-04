import React, { useState } from "react";
import { CSSTransition } from "react-transition-group";

const Filter = ({ onFilterChange, filters, locations }) => {
  const [showPriceDropdown, setShowPriceDropdown] = useState(false);
  const [showAreaDropdown, setShowAreaDropdown] = useState(false);
  const [minArea, setMinArea] = useState("");
  const [maxArea, setMaxArea] = useState("");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedLocation, setSelectedLocation] = useState("");

  const handleLocationChange = (e) => {
    setSelectedLocation(e.target.value);
    onFilterChange("location", e.target.value);
  };

  const resetAllFilters = () => {
    resetPriceFilter();
    resetAreaFilter();
    setSelectedLocation("");
    onFilterChange("location", "");
  };
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "minArea") {
      setMinArea(value);
    } else if (name === "area") {
      setMaxArea(value);
    } else if (name === "minPrice") {
      setMinPrice(value);
    } else if (name === "price") {
      setMaxPrice(value);
    }

    onFilterChange(name, value);
  };

  const closePriceDropdown = () => {
    setShowPriceDropdown(false);
  };

  const resetPriceFilter = () => {
    setMinPrice("");
    setMaxPrice("");
    onFilterChange("price", "");
    onFilterChange("minPrice", "");
  };

  const closeAreaDropdown = () => {
    setShowAreaDropdown(false);
  };

  const resetAreaFilter = () => {
    setMinArea("");
    setMaxArea("");
    onFilterChange("area", "");
    onFilterChange("minArea", "");
  };

  return (
    <div className="flex flex-wrap justify-center gap-4 mb-8">
      <div className="relative">
        <button
          onClick={() => setShowPriceDropdown(!showPriceDropdown)}
          className="orangeButton"
        >
          Set Price
        </button>
        <CSSTransition
          in={showPriceDropdown}
          timeout={300}
          classNames="dropdown"
          unmountOnExit
        >
          <div className="absolute mt-2 p-4 bg-white border border-gray-300 rounded-md shadow">
            <button
              onClick={closePriceDropdown}
              className="absolute top-2 right-2"
            >
              ×
            </button>
            <div className="flex flex-col">
              <label htmlFor="minPrice" className="mr-2">
                Min price (€):
              </label>
              <input
                type="number"
                name="minPrice"
                id="minPrice"
                value={minPrice}
                onChange={handleChange}
                className="border border-gray-300 px-2 py-1 rounded-md"
                min="0"
                max={filters.price}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="price" className="mr-2">
                Max Price (€):
              </label>
              <input
                type="number"
                name="price"
                id="price"
                value={maxPrice}
                onChange={handleChange}
                className="border border-gray-300 px-2 py-1 rounded-md"
                min={filters.minPrice}
              />
            </div>
            <button onClick={resetPriceFilter} className="orangeButton">
              Reset Filter
            </button>
          </div>
        </CSSTransition>
      </div>

      <div className="relative">
        <button
          onClick={() => setShowAreaDropdown(!showAreaDropdown)}
          className="orangeButton"
        >
          Set Area
        </button>
        <CSSTransition
          in={showAreaDropdown}
          timeout={300}
          classNames="dropdown"
          unmountOnExit
        >
          <div className="absolute mt-2 p-4 bg-white border border-gray-300 rounded-md shadow">
            <button
              onClick={closeAreaDropdown}
              className="absolute top-2 right-2"
            >
              ×
            </button>
            <div className="flex flex-col">
              <label htmlFor="minArea" className="mr-2">
                Min Area (m²):
              </label>
              <input
                type="number"
                name="minArea"
                id="minArea"
                value={minArea}
                onChange={handleChange}
                className="border border-gray-300 px-2 py-1 rounded-md"
                min="0"
                max={filters.area}
              />
            </div>
            <div className="mt-4 flex flex-col">
              <label htmlFor="area" className="mr-2">
                Max Area (m²):
              </label>
              <input
                type="number"
                name="area"
                id="area"
                value={maxArea}
                onChange={handleChange}
                className="border border-gray-300 px-2 py-1 rounded-md"
                min={filters.minArea}
              />
            </div>
            <button onClick={resetAreaFilter} className="orangeButton">
              Reset Filter
            </button>
          </div>
        </CSSTransition>
      </div>

      <div className="border-accent border-b-2 rounded-sm mt-1">
        <label htmlFor="location" className="mr-2 ">
          Location:
        </label>
        <select
          name="location"
          id="location"
          value={selectedLocation}
          onChange={handleLocationChange}
          className="border border-gray-300 px-2 py-1 mt-3 rounded-md"
        >
          <option value="">All Locations</option>
          {locations.map((location, index) => (
            <option key={index} value={location}>
              {location}
            </option>
          ))}
        </select>
      </div>
      <button onClick={resetAllFilters} className="orangeButton">
        Reset All Filters
      </button>
    </div>
  );
};

export default Filter;
