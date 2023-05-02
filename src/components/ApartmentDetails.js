// components/ApartmentDetails.js
import React from "react";

const ApartmentDetails = ({ apartment }) => {
  return (
    <div className="apartment-details">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold mb-4">
          {apartment.title}
        </h1>
        <div className="mb-4">
          <img
            src={apartment.images[0]}
            alt={apartment.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-heading font-semibold mb-2">
          Description
        </h2>
        <p className="text-lg mb-4">{apartment.description}</p>
        <h2 className="text-2xl font-heading font-semibold mb-2">
          Apartment Details
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Price: {apartment.sellingPrice}€</li>
          <li>Floor: {apartment.floor}</li>
          {/* Add more details as needed */}
        </ul>
      </div>
    </div>
  );
};

export default ApartmentDetails;
