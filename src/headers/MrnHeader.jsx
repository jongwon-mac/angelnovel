import React from "react";
import LatestButton from "../components/LatestBt";
import MainButton from "../components/MainBt";
import RankingButton from "../components/RankingBt";

function MrnHeader() {
  return (
    <header className="flex items-center justify-between px-30 ">
      <LatestButton />
      <MainButton />
      <RankingButton />
    </header>
  );
}

export default MrnHeader;
