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
      <div>프로필박스</div>
      <div>내작품</div>
      <div>
        <MyNovelCard />
      </div>
    </div>
  );
}

export default MyNovel;
