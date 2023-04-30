import Link from "next/link";

export default function Header({ isVisible }) {
  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-200 ${
        isVisible ? "bg-white" : "bg-transparent"
      }`}
    >
      {/* Add the rest of your header content */}
    </header>
  );
}
