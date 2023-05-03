// components/ApartmentDetails.js
import React, { useState } from "react";

const ApartmentDetails = (props) => {
  const { apartment, parentProject } = props;

  const apt = apartment.apartment;
  // Rest of the code

  //   const [apartment, setApartment] = useState(apartment.apartment);
  return (
    <div className="apartment-details">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-heading font-bold mb-4">{apt.title}</h1>
        <div className="mb-4">
          <img
            src={apt?.images[0]}
            alt={apartment.title}
            className="w-full h-full object-cover"
          />
        </div>
        <h2 className="text-2xl font-heading font-semibold mb-2">
          Description
        </h2>
        <p className="text-lg mb-4">{apt.description}</p>
        <h2 className="text-2xl font-heading font-semibold mb-2">
          Apartment Details
        </h2>
        <ul className="list-disc pl-5 mb-4">
          <li>Price: {apt.sellingPrice}€</li>
          <li>Floor: {apt.floor}</li>
          {/* Add more details as needed */}
        </ul>
      </div>
    </div>
  );
};

export default ApartmentDetails;
