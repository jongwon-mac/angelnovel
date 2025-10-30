import React from "react";

function RankingButton({ className = "ranking" }) {
  return (
    <button type="button" className={` ${className}`}>
      랭킹
    </button>
  );
}

export default RankingButton;
