import React from "react";
import { Link } from "react-router-dom";

function MyNovelButton({ className = "my-novel" }) {
  return (
    <Link to="/MyNovel" type="button" className={` ${className}`}>
      내작품
    </Link>
  );
}

export default MyNovelButton;
