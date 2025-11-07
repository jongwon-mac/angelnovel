import React from "react";
import { Link } from "react-router-dom";

function SelectionListButton({ className = "selection-list" }) {
  return (
    <Link to="/SelectionList" type="button" className={` ${className}`}>
      선작목록
    </Link>
  );
}

export default SelectionListButton;
