import React from "react";
import TopHeader from "../headers/TopHeader";
import HomeHeader from "../headers/HomeHeader";
import MrnHeader from "../headers/MrnHeader";
import { GenreSelectDrop } from "../drops/GenreSelectDrop";
import { NovelCard } from "../novelcards/NovelCard";
function HomeRanking() {
  return (
    <div>
      <TopHeader />
      <div>
        <HomeHeader />
        <MrnHeader />
      </div>
      <div>전체,조회수,추천수, 최신조회수,최신추천수</div>
      <div>
        <GenreSelectDrop />
      </div>
      <div>
        <NovelCard />
      </div>
    </div>
  );
}

export default HomeRanking;
