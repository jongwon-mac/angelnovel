import React from "react";
import LatestButton from "../components/LatestBt";
import MainButton from "../components/MainBt";
import RankingButton from "../components/RankingBt";

function MrnHeader() {
  return (
    <div className="p-8">
      <LatestButton />
      <MainButton />
      <RankingButton />
    </div>
  );
}

export default MrnHeader;
