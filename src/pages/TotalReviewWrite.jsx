import React from "react";
import LogoButton from "../components/LogoBt";
import ExitButton from "../components/ExitBt";
import { DetailNovelCard } from "../novelcards/DetailNovelCard";
import BaseStorytext from "../components/BaseStoryText";
import TotalReviewButton from "../components/TotalReviewBt";
function TotalReviewWrite() {
  return (
    <div>
      <LogoButton />
      <ExitButton />
      <DetailNovelCard />
      <BaseStorytext />
      <div>
        <TotalReviewButton />
        <div>O</div>
      </div>
      <div>작성텍스트</div>
      <button>등록</button>
      <div>감상총평목록</div>
    </div>
  );
}

export default TotalReviewWrite;
