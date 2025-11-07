import React from "react";
import TopHeader from "../headers/TopHeader";
import BackButton from "../components/BackBt";
import { MenuDrop } from "../drops/MenuDrop";
import { DetailNovelCard } from "../novelcards/DetailNovelCard";
import BaseStoryText from "../components/BaseStoryText";
import TotalReviewButton from "../components/TotalReviewBt";
import { Link } from "react-router-dom";
function NovelManage() {
  return (
    <div>
      <TopHeader />
      <div className="flex flex-row ">
        <BackButton />
        <div className="flex flex-flow: nowrap; ml-auto gap-4  ">
          <MenuDrop />
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <DetailNovelCard />
        <Link
          to="/NovelInfoFix"
          className="flex flex-flow: nowrap; justify-center   bg-blue-500 text-white font-bold "
        >
          작품정보 수정
        </Link>
        <BaseStoryText />
      </div>

      <div className="flex flex-row justify-center ">
        <button>목차</button>
        <TotalReviewButton />
      </div>
      <div className="flex flex-flow: nowrap; ml-auto gap-4 justify-end">
        <Link to="/NovelWrite">수정</Link>
        <button>삭제</button>
      </div>
      <div className="flex flex-row justify-center ">
        <Link to="/NovelWrite">
          <span>O</span>
          <span>회 작성</span>
        </Link>
      </div>
    </div>
  );
}

export default NovelManage;
