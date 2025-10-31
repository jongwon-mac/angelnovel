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
      <div>전체 5회이상 10회이상 15회이상</div>
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
