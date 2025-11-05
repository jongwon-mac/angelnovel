import React from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
function HomeButton({ className = "home" }) {
  return (
    <Link
      to="/HomeMain"
      type="button"
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      <IoMdHome />
    </Link>
  );
}
export default HomeButton;
