import React from "react";
import { IoChevronBackOutline } from "react-icons/io5";

function BackButton({ className = "back" }) {
  return (
    <button type="button" className={` ${className}`}>
      <IoChevronBackOutline />
    </button>
  );
}

export default BackButton;
