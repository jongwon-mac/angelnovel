import React from "react";
import { AiOutlineClose } from "react-icons/ai"; // react-icons import

function ExitButton({ className = "exit" }) {
  return (
    <button type="button" className={` ${className}`}>
      <AiOutlineClose />
    </button>
  );
}

export default ExitButton;
