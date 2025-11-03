import React from "react";
import BackButton from "../components/BackBt";

function ReadEpiso() {
  return (
    <div>
      <BackButton />
      <div className="회차제목">회차제목 </div>
      <hr />
      <div className="소설내용">소설내용 </div>
      <div>
        <div className="작가후기">작가후기 </div>
      </div>
      <div>
        <button>댓글</button>
      </div>
      <button>이전</button>
      <button>목차</button>
      <button>다음</button>
    </div>
  );
}

export default ReadEpiso;
