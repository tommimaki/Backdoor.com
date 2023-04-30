// components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Company Name</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold mb-2">Quick Links</h3>
            <ul className="text-sm">
              <li className="mb-2">
                <Link href="/">
                  <p>Home</p>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/about">
                  <p>About</p>
                </Link>
              </li>
              <li className="mb-2">
                <Link href="/contact">
                  <p>Contact</p>
                </Link>
              </li>
            </ul>
          </div>

          <div className="w-full md:w-1/3">
            <h3 className="text-xl font-semibold mb-2">Contact Us</h3>
            <p>
              123 Street Name, City, State, Country <br />
              Email: info@example.com <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center">
          <p className="text-sm">
            &copy; {new Date().getFullYear()} Company Name. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
