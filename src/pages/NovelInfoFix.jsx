import React from "react";
import ExitButton from "../components/ExitBt";
import novelimage from "../assets/novelimage.png";
import { GenreSelectDrop } from "../drops/GenreSelectDrop";
import { Link } from "react-router-dom";
import BaseStoryText from "../components/BaseStoryText";
function NovelInfoFix() {
  return (
    <div>
      <ExitButton />
      <div className="flex flex-col items-center gap-3">
        <b>작품정보</b>
        <div>
          <img src={novelimage} alt="작품표지" />
        </div>
        <div className="flex flex-col items-start gap-7">
          <div className="flex flex-row">
            제목
            <textarea name="제목" id="제목">
              {}
            </textarea>
          </div>
          <hr />
          <div className="flex flex-row gap-10">
            장르
            <GenreSelectDrop />
          </div>
          <hr />
          <div>
            <BaseStoryText />
            <textarea name="줄거리" id="줄거리">
              줄거리를 입력하시오
            </textarea>
          </div>
        </div>
        <Link to="/NovelManage">
          <button className="bg-blue-500 text-white font-bold padding-50">
            수정완료
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NovelInfoFix;
