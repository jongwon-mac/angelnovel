import React from "react";
import TopHeader from "../headers/TopHeader";
import HomeHeader from "../headers/HomeHeader";
import MrnHeader from "../headers/MrnHeader";

function HomeMain() {
  return (
    <div>
      <TopHeader />
      <HomeHeader />
      <MrnHeader />
      <div>추천소설 TOP 10 박스</div>
    </div>
  );
}

export default HomeMain;
