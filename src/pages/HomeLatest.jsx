import React from "react";
import TopHeader from "../headers/TopHeader";
import HomeHeader from "../headers/HomeHeader";
import MrnHeader from "../headers/MrnHeader";
import { GenreSelectDrop } from "../drops/GenreSelectDrop";
import { NovelCard } from "../novelcards/NovelCard";
function HomeLatest() {
  return (
    <div>
      <TopHeader />
      <HomeHeader />
      <MrnHeader />
      <div className="flex gap-2">
        <button>전체</button>
        <button>5회이상</button>
        <button>10회이상</button>
        <button>15회이상</button>
      </div>
      <div className="flex flex-flow: nowrap; ml-auto gap-4">
        <GenreSelectDrop />
      </div>
      <div>
        <NovelCard />
      </div>
    </div>
  );
}

export default HomeLatest;
