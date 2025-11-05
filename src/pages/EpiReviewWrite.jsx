import React from "react";
import ExitButton from "../components/ExitBt";
import { Link } from "react-router-dom";
function EpiReviewWrite() {
  return (
    <div>
      <ExitButton />
      <div className="flex flex-col items-center gap-3">
        <div>작성텍스트</div>
        <div>
          <Link to="/EpiReviewList">등록</Link>
        </div>
      </div>
      <div className="flex flex-row">
        댓글 <div>O</div>
      </div>
    </div>
  );
}

export default EpiReviewWrite;
