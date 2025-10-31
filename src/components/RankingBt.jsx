import React from "react";

function RankingButton({ className = "ranking" }) {
  return (
    <button
      type="button"
      className={`px-4 py-2 rounded-md bg-[#E6F2F4] text-black hover:bg-[#cfe6ea] focus:ring-2 focus:ring-[#cfe6ea] ${className}`}
    >
      랭킹
    </button>
  );
}

export default RankingButton;
