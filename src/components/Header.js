import Link from "next/link";

export default function Header({ isVisible }) {
  return (
    <header
      className={`fixed top-0 h-15 left-0 w-full z-50 transition-all duration-200 ${
        isVisible ? "border-2 border-white " : "bg-transparent"
      }`}
    >
      <h2
        className={`transition-all duration-200 ${
          isVisible ? "text-black" : "text-transparent"
        }`}
      >
        Backdoor.com
      </h2>
    </header>
  );
}
