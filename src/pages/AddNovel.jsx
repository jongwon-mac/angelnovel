import React, { useState } from "react";
import ExitButton from "../components/ExitBt";
import novelimage from "../assets/novelimage.png";
import { GenreSelectDrop } from "../drops/GenreSelectDrop";
import { Link } from "react-router-dom";
import BaseStoryText from "../components/BaseStoryText";
import { RiUpload2Fill } from "react-icons/ri";
export default function AddNovel() {
  const [coverImageUrl, setCoverImageUrl] = useState(novelimage);
  const handleImageChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type.substring(0, 5) === "image") {
      if (coverImageUrl && coverImageUrl !== novelimage) {
        URL.revokeObjectURL(coverImageUrl);
      }
      setCoverImageUrl(URL.createObjectURL(file));
      uploadImageToServer(file);
    } else {
      alert("이미지 파일을 선택해주세요.");
    }
  };
  const uploadImageToServer = (file) => {
    console.log("업로드할 파일:", file.name);
  };
  return (
    <div>
      <ExitButton />
      <div className="flex flex-col items-center gap-3">
        <b>신작등록</b>
        <div>
          <div className="cover-container">
            <div
              className="cover-image w-27 h-30 object-cover rounded-sm transition-all "
              style={{ backgroundImage: `url(${coverImageUrl})` }}
            >
              <button
                className="change-button"
                onClick={() => document.getElementById("file-input").click()}
              >
                <RiUpload2Fill />
              </button>
            </div>

            <input
              id="file-input"
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              style={{ display: "none" }}
            />
          </div>
        </div>
        <div className="flex flex-col items-start gap-7">
          <div className="flex flex-row">
            제목:
            <textarea
              name="제목"
              id="제목"
              type="text"
              placeholder="제목을 입력하시오"
            >
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
            <textarea
              name="줄거리"
              id="줄거리"
              type="text"
              placeholder="줄거리를 입력하시오"
            ></textarea>
          </div>
        </div>
        <Link to="/MyNovel">
          <button className="bg-sky-500 text-white font-bold padding-50 px-2 py-1 rounded-md">
            등록
          </button>
        </Link>
      </div>
    </div>
  );
}
