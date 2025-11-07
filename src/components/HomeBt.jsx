import React from "react";
import { IoMdHome } from "react-icons/io";
import { Link } from "react-router-dom";
function HomeButton({ className = "home" }) {
  return (
    <Link to="/HomeMain" type="button" className={`${className}`}>
      <IoMdHome />
    </Link>
  );
}
export default HomeButton;
