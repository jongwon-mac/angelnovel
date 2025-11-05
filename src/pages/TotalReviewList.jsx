import React from "react";
import TopHeader from "../headers/TopHeader";
import BackButton from "../components/BackBt";
import { DetailNovelCard } from "../novelcards/DetailNovelCard";
import BaseStoryText from "../components/BaseStoryText";
import TotalReviewButton from "../components/TotalReviewBt";
import { Link } from "react-router-dom";
function TotalReviewList() {
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
      <div className="flex  items-center  ml-auto">
        <div className="flex flex-row">
          감상총평 <div>O</div>
        </div>
        <div className=" flex  ml-auto gap-4 ">
          <Link to="/TotalReviewWrite">작성</Link>
        </div>
      </div>
    </div>
  );
}

export default TotalReviewList;
