import React from "react";
import BackButton from "../components/BackBt";
import TopHeader from "../headers/TopHeader";
import { NovelCard } from "../novelcards/NovelCard";
import profile from "../assets/profile.png";
function WriterInfo() {
  return (
    <div className="flex flex-col gap-3">
      <TopHeader />
      <BackButton />
      <div className="user-photo-wrapper flex flex-col items-center gap-3  bg-sky-200">
        <div>
          <img src={profile} alt="유저 프로필 사진" />
        </div>
        <div>
          <h4 className="flex justify-center">
            <b>떡만둣국</b>
          </h4>
          <p>나는....나다!!</p>
        </div>
      </div>
      <div className="flex flex-col items-center gap-3">
        <b>작품목록</b>
        <NovelCard />
        <NovelCard />
      </div>
    </div>
  );
}

export default WriterInfo;
