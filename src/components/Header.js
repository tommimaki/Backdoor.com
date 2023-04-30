import Link from "next/link";

export default function Header({ isVisible }) {
  return (
    <header
      className={`fixed top-0 h-20 left-0 w-full z-50 transition-all duration-200 ${
        isVisible
          ? " opacity-100 pointer-events-auto"
          : "invisible opacity-0 pointer-events-none"
      }`}
    >
      <div className="flex justify-between">
        <Link href="/">
          <div className="flex flex-col p-3 text-amber-950 items-center text-lg justify-center ml-20 mt-4  rounded-full border-2">
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

        <div className=" mr-20 p-5 mt-4 inline-flex items-center text-amber-950 rounded-full border-2 ">
          <Link href="/">
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
          </Link>
        </div>
      </div>
    </header>
  );
}
// export default function Header({ isVisible }) {
//   return (
//     <header
//       className={`fixed top-0 h-20 left-0 w-full z-50 transition-all duration-200 ${
//         isVisible ? "border-2 border-white " : "bg-transparent"
//       }`}
//     >
//       <h2
//         className={`transition-all duration-200 ${
//           isVisible ? "text-black" : "text-transparent"
//         }`}
//       >
//         Backdoor.com
//       </h2>
//     </header>
//   );
// }
