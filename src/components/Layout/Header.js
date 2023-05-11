import { useState } from "react";
import Link from "next/link";

export default function Header({ isVisible, onLandingPage }) {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  const headerBg = onLandingPage
    ? "bg-transparent"
    : "bg-bgDark shadow-md pointer-events-auto";

  return (
    <header
      className={` headerz fixed top-0 h-20 left-0 w-full z-50 transition-all  duration-200 ${headerBg} ${
        isVisible ? "opacity-100 " : "invisible opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between   ">
        <Link href="/">
          <div className="flex flex-col  text-amber-950 items-center text-lg justify-center ml-20 mt-2 ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10  "
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"
              />
            </svg>
            <h2 className="">
              <b>Backdoor</b>
            </h2>
          </div>
        </Link>
        <div className="mr-20   inline-flex items-center text-textDark ">
          <button onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
              />
            </svg>
          </button>
        </div>
      </div>

      {menuVisible && (
        <div className="fixed top-0 left-0 w-full h-full  bg-bgDark z-40 flex justify-center items-center">
          <nav className="text-2xl text-white">
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 text-white"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-28 h-28 hover:bg-bgLight rounded-full"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>

            <ul>
              <li className="mb-5 text-white">
                <Link href="/">
                  <p
                    className=" text-textDark hover:bg-bgLight hover:text-accent hover:shadow-accent p-2 rounded-lg"
                    onClick={toggleMenu}
                  >
                    Home
                  </p>
                </Link>
              </li>
              <li className="mb-5 text-white">
                <Link href="/apartments">
                  <p
                    className=" text-textDark  hover:bg-bgLight hover:text-accent hover:shadow-accent p-2 rounded-lg"
                    onClick={toggleMenu}
                  >
                    Apartments For Sale
                  </p>
                </Link>
              </li>
              <li className="mb-5 text-white">
                <Link href="/projects">
                  <p
                    className=" text-textDark  hover:bg-bgLight hover:text-accent hover:shadow-accent p-2 rounded-lg"
                    onClick={toggleMenu}
                  >
                    Finished Projects
                  </p>
                </Link>
              </li>
              <li className="mb-5 text-white">
                <Link href="/inconstruction">
                  <p
                    className=" text-textDark  hover:bg-bgLight hover:text-accent hover:shadow-accent p-2 rounded-lg"
                    onClick={toggleMenu}
                  >
                    Projects In Construction
                  </p>
                </Link>
              </li>
              <li className="mb-5 text-white">
                <Link href="/about">
                  <p
                    className=" text-textDark  hover:bg-bgLight hover:text-accent hover:shadow-accent p-2 rounded-lg"
                    onClick={toggleMenu}
                  >
                    About Us
                  </p>
                </Link>
              </li>
              <li className="mb-5 text-white">
                <Link href="/contact">
                  <p
                    className=" text-textDark  hover:bg-bgLight hover:text-accent hover:shadow-accent p-2 rounded-lg"
                    onClick={toggleMenu}
                  >
                    Contact Us
                  </p>
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
