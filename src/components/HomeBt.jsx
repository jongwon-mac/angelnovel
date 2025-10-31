import React from "react";
import { IoMdHome } from "react-icons/io";

function HomeButton({ className = "home" }) {
  return (
    <button
      type="button"
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      <IoMdHome />
    </button>
  );
}

export default HomeButton;
