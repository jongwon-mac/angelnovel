import React from "react";
import SelectionListButton from "../components/SelectionListBt";
import HomeButton from "../components/HomeBt";
import MyNovelButton from "../components/MyNovelBt";
import { MenuDrop } from "../drops/MenuDrop";

function MyNovelHeader() {
  return (
    <div>
      <b className="p-8">
        &nbsp;
        <SelectionListButton />
        &nbsp; <HomeButton />
        &nbsp; <MyNovelButton />
        <button
          type="link"
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded`}
        >
          신작등록
        </button>
        &nbsp; <MenuDrop />
      </b>
    </div>
  );
}

export default MyNovelHeader;
