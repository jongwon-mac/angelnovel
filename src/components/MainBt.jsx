import React from "react";

function MainButton({ className = "main" }) {
  return (
    <button type="button" className={` ${className}`}>
      메인
    </button>
  );
}

export default MainButton;
