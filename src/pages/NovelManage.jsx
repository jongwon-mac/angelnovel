import React from "react";
import TopHeader from "../headers/TopHeader";
import BackButton from "../components/BackBt";
import { MenuDrop } from "../drops/MenuDrop";
import { DetailNovelCard } from "../novelcards/DetailNovelCard";
import BaseStoryText from "../components/BaseStoryText";
import TotalReviewButton from "../components/TotalReviewBt";
function NovelManage() {
  return (
    <div>
      <TopHeader />
      <BackButton />
      <MenuDrop />
      <DetailNovelCard />
      <BaseStoryText />
      <button>목차</button>
      <TotalReviewButton />
      <p>회차칸</p>
      <button>삭제</button>
      <button>수정</button>
      <button>
        <span>O</span>
        <span>회 작성</span>
      </button>
    </div>
  );
}

export default NovelManage;
