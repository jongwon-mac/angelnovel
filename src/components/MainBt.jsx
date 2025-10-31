import React from "react";

function MainButton({ className = "main" }) {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-md bg-[#E6F2F4] text-black hover:bg-[#cfe6ea] focus:ring-2 focus:ring-[#cfe6ea] ${className}`}
    >
      메인
    </button>
  );
}

export default MainButton;
