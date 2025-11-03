import React from "react";
import BackButton from "../components/BackBt";

function NovelWrite() {
  return (
    <div>
      <BackButton />
      <button>작품등록</button>
      <div className="회차제목">회차제목 </div>
      <hr />
      <div className="소설내용">소설내용 </div>
      <div>
        <div className="작가후기">작가후기 </div>
      </div>
    </div>
  );
}

export default NovelWrite;
