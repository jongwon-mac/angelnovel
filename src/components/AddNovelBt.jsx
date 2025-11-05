import React from "react";
import { Link } from "react-router-dom";
function AddNovelButton({ className = "AddNovel" }) {
  return (
    <Link to="/AddNovel" type="button" className={` ${className}`}>
      신작등록
    </Link>
  );
}

export default AddNovelButton;
