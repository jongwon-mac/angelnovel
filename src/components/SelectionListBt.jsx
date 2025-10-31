import React from "react";

function SelectionListButton({ className = "selection-list" }) {
  return (
    <button
      type="button"
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      선작목록
    </button>
  );
}

export default SelectionListButton;
