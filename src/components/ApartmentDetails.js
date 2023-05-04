// components/ApartmentDetails.js
import React, { useState } from "react";
import ImageCarousel from "./ImageCarousel";

const ApartmentDetails = (props) => {
  const { apartment, parentProject } = props;

  const apt = apartment.apartment;
  console.log(apt);

  //   const [apartment, setApartment] = useState(apartment.apartment);
  return (
    <div className="apartment-details pt-6 overflow-hidden bg-bgLight ">
      <div className="container mx-auto overflow-hidden  ">
        <div className="mb-4">
          <ImageCarousel imageUrls={apt.images} />
          <div className="bg-bgDark absolute bottom-0 right-1 p-4 rounded-lg w-1/3 h-48 shadow-accent   ">
            <h1 className="text-4xl  font-heading font-bold mb-4">
              {apt.title}
            </h1>
            <p className="text-3xl font-heading mb-4">{apt.description}</p>
            <p className="text-xl">
              <b>{apt.sellingPrice}€</b>
            </p>
          </div>
        </div>
        <h2 className="text-2xl font-heading font-semibold mb-2">
          Description
        </h2>
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
