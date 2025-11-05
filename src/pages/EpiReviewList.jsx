import BackButton from "../components/BackBt";
import { Link } from "react-router-dom";
function EpiReviewList() {
  return (
    <div>
      <BackButton />
      <div className="flex  items-center  ml-auto">
        <div className="flex flex-row">
          댓글 <div>O</div>
        </div>
        <div className=" flex  ml-auto gap-4 ">
          <Link to="/EpiReviewWrite">작성</Link>
        </div>
      </div>
    </div>
  );
}

export default EpiReviewList;
