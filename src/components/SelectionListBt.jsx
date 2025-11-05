import React from "react";
import { Link } from "react-router-dom";

function SelectionListButton({ className = "selection-list" }) {
  return (
    <Link
      to="/SelectionList"
      type="button"
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      선작목록
    </Link>
  );
}

export default SelectionListButton;
