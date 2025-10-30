import React from "react";

function LatestButton({ className = "latest" }) {
  return (
    <button type="button" className={` ${className}`}>
      최신
    </button>
  );
}

export default LatestButton;
