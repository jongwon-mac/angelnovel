import React from "react";
import logo from "../assets/logo.png";
import { Link } from "react-router-dom";
function LogoButton({ className = "logo" }) {
  return (
    <Link to="/HomeMain" type="button" className={` ${className}`}>
      <img src={logo} alt="로고" />
    </Link>
  );
}

export default LogoButton;
