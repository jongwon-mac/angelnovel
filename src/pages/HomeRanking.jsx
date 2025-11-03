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
      <HomeHeader />
      <MrnHeader />
      <div className="flex gap-2">
        <button>전체</button>
        <button>조회수</button>
        <button>추천수</button>
        <button>최신조회수</button>
        <button>최신추천수</button>
      </div>
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
