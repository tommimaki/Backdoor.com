// pages/apartments.js
import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import Layout from "../components/Layout";
import Filter from "../components/Filter";

const Apartments = () => {
  const [apartments, setApartments] = useState([]);
  const [parentProjects, setParentProjects] = useState([]);
  const [filteredApartments, setFilteredApartments] = useState([]);
  const [filters, setFilters] = useState({
    price: null,
    area: null,
    location: null,
    minPrice: null,
    minArea: null,
  });

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}apartments`
        );
        const apartmentData = response.data.map((item) => item.apartment);
        const parentProjectData = response.data.map(
          (item) => item.parentProject
        );
        setApartments(apartmentData);
        setParentProjects(parentProjectData);
        setFilteredApartments(apartmentData);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching apartments", error.message);
      }
    }

    fetchData();
  }, []);

  useEffect(() => {
    const filtered = apartments.filter((apartment, index) => {
      if (filters.price && apartment.sellingPrice > parseFloat(filters.price)) {
        return false;
      }
      if (
        filters.minPrice &&
        apartment.sellingPrice < parseFloat(filters.minPrice)
      ) {
        return false;
      }
      if (filters.area && apartment.area > parseFloat(filters.area)) {
        return false;
      }
      if (filters.minArea && apartment.area < parseFloat(filters.minArea)) {
        return false;
      }
      if (
        filters.location &&
        !parentProjects[index].location
          .toLowerCase()
          .includes(filters.location.toLowerCase())
      ) {
        return false;
      }
      return true;
    });

    setFilteredApartments(filtered);
  }, [filters, apartments]);

  return (
    <Layout>
      <div className="relative px-8  py-32">
        <Filter
          onFilterChange={(name, value) =>
            setFilters((prevFilters) => ({
              ...prevFilters,
              [name]: value,
            }))
          }
          filters={filters}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 z-10">
          {filteredApartments?.map((apartment, index) => (
            <Link
              key={apartment._id}
              href={`/apartment/${apartment._id}`}
              className="block rounded-lg p-4 shadow-sm bg-white hover:shadow-accent  shadow-indigo-200"
            >
              <img
                alt={apartment.title}
                src={apartment.images[0]}
                className="h-56 w-full rounded-md object-cover"
              />
              <div className="mt-2">
                <dl>
                  <div>
                    <dt className="sr-only">Title</dt>
                    <dd className="text-sm text-gray-500">{apartment.title}</dd>
                  </div>
                  <div>
                    <dt className="sr-only">Description</dt>
                    <dd className="font-medium">{apartment.description}</dd>
                  </div>
                </dl>
                <div className="mt-6 flex items-center gap-8 justify- text-xs">
                  <div className="sm:inline-flex sm:shrink-0 sm:items-center  sm:gap-2">
                    <div className="flex gap-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 accent-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M14.25 7.756a4.5 4.5 0 100 8.488M7.5 10.5h5.25m-5.25 3h5.25M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                      </svg>
                      <div>
                        <dt className="">Price:</dt>
                        <dd className="text-sm text-gray-500">
                          <b>{apartment.sellingPrice}€</b>
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 accent-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                        />
                      </svg>
                      <div>
                        <dt className="">Floor:</dt>
                        <dd className="text-sm text-gray-500">
                          <b>{apartment.floor}</b>
                        </dd>
                      </div>
                    </div>
                    <div className="flex gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-10 h-10 accent-icon"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z"
                        />
                      </svg>

                      <div>
                        <dt className="">Area:</dt>
                        <dd className="text-sm text-gray-500">
                          <b>{apartment.area}m2</b>
                        </dd>
                      </div>
                      <div>
                        <dt className="">Location:</dt>
                        <dd className="text-sm text-gray-500">
                          <b>{parentProjects[index].location}</b>
                        </dd>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
        {filteredApartments?.length === 0 && (
          <div className="text-center text-gray-500 text-xl">
            No apartments available.
          </div>
        )}
      </div>
    </Layout>
  );
};

export default Apartments;
