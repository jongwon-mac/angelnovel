import React from "react";

function AddNovelButton({ className = "AddNovel" }) {
  return (
    <button type="button" className={` ${className}`}>
      신작등록
    </button>
  );
}

export default AddNovelButton;
