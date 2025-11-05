import React from "react";
import BackButton from "../components/BackBt";
import { Link } from "react-router-dom";
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
        <Link to="/EpiReviewList">댓글</Link>
      </div>
      <button>이전</button>
      <Link to="/DetailNovel">목차</Link>
      <button>다음</button>
    </div>
  );
}

export default ReadEpiso;
