import React from "react";
import { GenreSelectDrop } from "../drops/GenreSelectDrop";
import { Link } from "react-router-dom";
function AddNovel() {
  return (
    <div>
      <div>
        <h1>신작등록</h1>
      </div>
      <div>
        <GenreSelectDrop />
      </div>
      <Link to="/MyNovel">등록</Link>
    </div>
  );
}

export default AddNovel;
