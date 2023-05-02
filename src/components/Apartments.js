import { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
export default function Apartments() {
  const [apartments, setApartments] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}apartments`
        );
        setApartments(response.data);
        console.log(response.data);
      } catch (error) {
        console.error("Error fetching apartments", error.message);
      }
    }

    fetchData();
  }, []);

  return (
    <div id="apartments" className="bg-bgLight w-full min-h-screen ">
      <div className="wrapper flex flex-col">
        <div className="mx-auto p-10">
          <div className="text-right">
            <h1 class="text-7xl text-textDark font-heading font-bold mb-8">
              Apartments for sale
            </h1>
          </div>
          <div className="relative">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-4 z-10">
              {apartments?.map((apartment) => (
                <Link
                  key={apartment._id}
                  href={`/apartment/${apartment._id}`}
                  className="block rounded-lg p-4 shadow-sm bg-white  shadow-indigo-200"
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
                        <dd className="text-sm text-gray-500">
                          {apartment.title}
                        </dd>
                      </div>
                      <div>
                        <dt className="sr-only">Description</dt>
                        <dd className="font-medium">{apartment.description}</dd>
                      </div>
                    </dl>
                    <div className="mt-6 flex items-center gap-8 text-xs">
                      <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
                        <div>
                          <dt className="">Price</dt>
                          <dd className="text-sm text-gray-500">
                            {apartment.sellingPrice}€
                          </dd>
                        </div>
                        <div>
                          <dt className="">Floor</dt>
                          <dd className="text-sm text-gray-500">
                            {apartment.floor}
                          </dd>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
            {apartments?.length === 0 && (
              <div className="text-center text-gray-500 text-xl">
                No apartments available.
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
// <Link
//   href="/"
//   className="block rounded-lg p-4 shadow-sm shadow-indigo-100"
// >
//   <img
//     alt="Home"
//     src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
//     className="h-56 w-full rounded-md object-cover"
//   />

//   <div className="mt-2">
//     <dl>
//       <div>
//         <dt className="sr-only">Price</dt>

//         <dd className="text-sm text-gray-500">$240,000</dd>
//       </div>

//       <div>
//         <dt className="sr-only">Address</dt>

//         <dd className="font-medium">123 Wallaby Avenue, Park Road</dd>
//       </div>
//     </dl>

//     <div className="mt-6 flex items-center gap-8 text-xs">
//       <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//         <svg
//           className="h-4 w-4 text-indigo-700"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z"
//           />
//         </svg>

//         <div className="mt-1.5 sm:mt-0">
//           <p className="text-gray-500">Parking</p>

//           <p className="font-medium">2 spaces</p>
//         </div>
//       </div>

//       <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//         <svg
//           className="h-4 w-4 text-indigo-700"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
//           />
//         </svg>

//         <div className="mt-1.5 sm:mt-0">
//           <p className="text-gray-500">Bathroom</p>

//           <p className="font-medium">2 rooms</p>
//         </div>
//       </div>

//       <div className="sm:inline-flex sm:shrink-0 sm:items-center sm:gap-2">
//         <svg
//           className="h-4 w-4 text-indigo-700"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 24 24"
//           stroke="currentColor"
//         >
//           <path
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
//           />
//         </svg>

//         <div className="mt-1.5 sm:mt-0">
//           <p className="text-gray-500">Bedroom</p>

//           <p className="font-medium">4 rooms</p>
//         </div>
//       </div>
//     </div>
//   </div>
// </Link>
