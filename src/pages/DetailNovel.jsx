import React from "react";
import TopHeader from "../headers/TopHeader";
import { DetailNovelCard } from "../novelcards/DetailNovelCard";
import BaseStoryText from "../components/BaseStoryText";
function DetailNovel() {
  return (
    <div>
      <TopHeader />
      <DetailNovelCard />
      <BaseStoryText />
    </div>
  );
}

export default DetailNovel;
