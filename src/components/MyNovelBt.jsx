import React from "react";

function MyNovelButton({ className = "my-novel" }) {
  return (
    <button type="button" className={` ${className}`}>
      내작품
    </button>
  );
}

export default MyNovelButton;
