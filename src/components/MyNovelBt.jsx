import React from "react";

function MyNovelButton({ className = "my-novel" }) {
  return (
    <button
      type="button"
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      내작품
    </button>
  );
}

export default MyNovelButton;
