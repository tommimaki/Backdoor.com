// components/ApartmentDetails.js
import React, { useState } from "react";
import ImageCarousel from "../functional/ImageCarousel";
import BottomBanner from "../Misc/BottomBanner";
import Link from "next/link";
import Seller from "../Misc/Seller";
import VisitingDayPicker from "../Misc/VisitingDayPicker";

const ApartmentDetails = (props) => {
  const { apartment, parentProject } = props;

  const apt = apartment.apartment;
  const parent = apartment.parentProject;

  //   const [apartment, setApartment] = useState(apartment.apartment);
  return (
    <div className="apartment-details pt-20 overflow-hidden bg-bgLight ">
      <div className="container mx-auto overflow-hidden  ">
        <div className="mb-4 relative">
          <ImageCarousel imageUrls={apt.images} />
          <div className="bg-bgDark absolute bottom-0 right-1 p-2 sm:p-4 rounded-tl-lg rounded-bl-lg  w-1/3 h-48 shadow-accent   ">
            <h1 className="text-4xl  font-heading font-bold mb-4">
              {apt.title}
            </h1>
            <p className="text-3xl font-heading mb-4">{apt.description}</p>
            <p className="text-xl">
              <b>{apt.sellingPrice}€</b>
            </p>
          </div>
        </div>

        <div className="my-10 h-auto">
          <h3 className="text-4xl text-center font-heading mb-4 font-semibold">
            Apartment Details:
          </h3>
          <div className="flex items-center justify-center h-full">
            <ul className="grid grid-cols-2 gap-2">
              <li className="flex gap-1">
                <p>
                  Area: <br /> <b>{apt.area} m²</b>
                </p>
              </li>
              <li className="flex gap-1">
                <p>
                  Floor: <br /> <b>{apt.floor}</b>
                </p>
              </li>
              <li className="flex gap-1">
                <p>
                  Selling Price: <br /> <b>{apt.sellingPrice}€</b>
                </p>
              </li>
              <li className="flex gap-1">
                <p>
                  Debt-Free Price: <br /> <b>{apt.debtFreePrice}€</b>
                </p>
              </li>
              <li className="flex gap-1">
                <p>
                  Maintenance Fee: <br /> <b>{apt.maintenanceFee}€</b>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="my-20 p-10 bg-bgDark h-auto">
        <h3 className="text-4xl text-center font-heading mb-8 font-semibold">
          This apartment is located in our{" "}
          <Link className="underline" href={`/project/${parent._id}`}>
            {parent.title}
            {"  "}
            {"  "}
          </Link>
          building
        </h3>
        <div className="flex items-center justify-center h-full">
          <ul className="grid grid-cols-4 gap-2">
            <li className="flex gap-1">
              <p>
                Address: <br /> <b>{parent.address}</b>
              </p>
            </li>
            <li className="flex gap-1">
              <p>
                Building Type: <br /> <b>{parent.buildingType}</b>
              </p>
            </li>
            <li className="flex gap-1">
              <p>
                Location: <br /> <b>{parent.location}</b>
              </p>
            </li>
            <li className="flex gap-1">
              <p>
                Floors: <br /> <b>{parent.floors}</b>
              </p>
            </li>
            <li className="flex gap-1">
              <p>
                Number of Apartments: <br /> <b>{parent.numberOfApartments}</b>
              </p>
            </li>
          </ul>
        </div>
        <div className="flex justify-center">
          <Link href={`/project/${parent._id}`}>
            <button className="orangeButton"> Take a look!</button>
          </Link>
        </div>
      </div>
      <div className="flex flex-col mx-auto justify-center">
        <Seller />
        <div className="w-1/2 mx-auto mb-10">
          <VisitingDayPicker />
        </div>
      </div>
      <BottomBanner />
    </div>
  );
};

export default ApartmentDetails;
