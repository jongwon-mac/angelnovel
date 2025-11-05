import React from "react";
import TopHeader from "../headers/TopHeader";
import MyNovelHeader from "../headers/MyNovelHeader";
import { MyNovelCard } from "../novelcards/MyNovelCard";
function MyNovel() {
  return (
    <div>
      <TopHeader />
      <div>
        <MyNovelHeader />
      </div>
      <div className="flex justify-center ">프로필박스</div>
      <div className="flex flex-col items-center gap-3">
        <div>내작품</div>
        <MyNovelCard />
        <MyNovelCard />
      </div>
    </div>
  );
}

export default MyNovel;
