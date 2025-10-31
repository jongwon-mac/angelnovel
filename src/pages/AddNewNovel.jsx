import React from "react";
import { GenreSelectDrop } from "../drops/GenreSelectDrop";
function AddNewNovel() {
  return (
    <div>
      <div>
        <h1>신작등록</h1>
      </div>
      <div>
        <GenreSelectDrop />
      </div>
    </div>
  );
}

export default AddNewNovel;
