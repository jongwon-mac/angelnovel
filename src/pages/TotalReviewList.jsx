import React from "react";
import TopHeader from "../headers/TopHeader";
import BackButton from "../components/BackBt";
import { DetailNovelCard } from "../novelcards/DetailNovelCard";
import BaseStorytext from "../components/BaseStoryText";
import TotalReviewButton from "../components/TotalReviewBt";
function TotalReviewList() {
  return (
    <div>
      <TopHeader />
      <BackButton />
      <DetailNovelCard />
      <BaseStorytext />
      <div>
        <TotalReviewButton />
        <div>O</div>
      </div>
      <div>감상총평 목록</div>
      <button>작성</button>
    </div>
  );
}

export default TotalReviewList;
