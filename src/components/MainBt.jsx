import React from "react";
import { Link } from "react-router-dom";
function MainButton({ className = "main" }) {
  return (
    <Link
      to="/HomeMain"
      type="button"
      className={`px-4 py-2 rounded-md bg-[#E6F2F4] text-black hover:bg-[#cfe6ea] focus:ring-2 focus:ring-[#cfe6ea] ${className}`}
    >
      메인
    </Link>
  );
}

export default MainButton;
