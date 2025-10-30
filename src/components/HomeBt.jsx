import React from "react";
import { IoMdHome } from "react-icons/io";

function HomeButton({ className = "home" }) {
  return (
    <button type="button" className={` ${className}`}>
      <IoMdHome />
    </button>
  );
}

export default HomeButton;
