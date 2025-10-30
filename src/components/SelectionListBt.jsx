import React from "react";

function SelectionListButton({ className = "selection-list" }) {
  return (
    <button type="button" className={` ${className}`}>
      선작목록
    </button>
  );
}

export default SelectionListButton;
