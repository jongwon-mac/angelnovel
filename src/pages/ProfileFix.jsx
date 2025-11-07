import React from "react";
import { Link } from "react-router-dom";
import profile from "../assets/profile.png";
function ProfileFix() {
  return (
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
      <Link to="/MyNovel">수정완료</Link>
    </div>
  );
}

export default ProfileFix;
