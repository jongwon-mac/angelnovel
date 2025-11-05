import React from "react";
import { Link } from "react-router-dom";

function MyNovelButton({ className = "my-novel" }) {
  return (
    <Link
      to="/MyNovel"
      type="button"
      className={`bg-blue-500 text-white font-bold py-2 px-4 rounded ${className}`}
    >
      내작품
    </Link>
  );
}

export default MyNovelButton;
