import React from "react";
import logo from "../assets/logo.png";

function LogoButton({ className = "logo" }) {
  return (
    <button type="button" className={` ${className}`}>
      <img src={logo} alt="로고" />
    </button>
  );
}

export default LogoButton;
