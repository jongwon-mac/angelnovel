import React from "react";
import BackButton from "../components/BackBt";
import TopHeader from "../headers/TopHeader";
import { DetailNovelCard } from "../novelcards/DetailNovelCard";
import BaseStoryText from "../components/BaseStoryText";
import TotalReviewButton from "../components/TotalReviewBt";
import { Link } from "react-router-dom";
function DetailNovel() {
  return (
    <div>
      <TopHeader />
      <BackButton />
      <div className="flex flex-col items-center gap-3">
        <DetailNovelCard />
        <BaseStoryText />
      </div>
      <div className="flex flex-row justify-center ">
        <button>목차</button>
        <TotalReviewButton />
      </div>
      <div className="flex justify-end ">
        <Link to="/ReadEpiso">회차읽기</Link>
      </div>
    </div>
  );
}

export default DetailNovel;
