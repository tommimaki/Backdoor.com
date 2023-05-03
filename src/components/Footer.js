// components/Footer.js
import React from "react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-bgDark text-grey-600 py-6">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center">
          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-heading font-semibold mb-2">
              Backdoor
            </h3>
            <p className="font-text">
              Welcome to Backdoor Homes, where we blend contemporary design with
              everyday practicality to create the perfect living space for you
              and your family.
            </p>
          </div>

          <div className="w-full md:w-1/3 mb-4 md:mb-0">
            <h3 className="text-xl font-semibold font-heading  mb-2">
              Quick Links
            </h3>
            <ul className="text-sm font-text">
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
            <h3 className="text-xl font-heading  font-semibold mb-2">
              Contact Us
            </h3>
            <p className="font-text">
              123 Flemari, Helsinki, Uusimaa, Finland <br />
              Email: info@example.com <br />
              Phone: +1 (123) 456-7890
            </p>
          </div>
        </div>

        <hr className="my-4" />

        <div className="text-center">
          <p className="text-sm text-accent">
            <a
              href="https://tommimaki.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              &copy; {new Date().getFullYear()} Tommi Mäki
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
