import React from "react";
import SelectionListButton from "../components/SelectionListBt";
import HomeButton from "../components/HomeBt";
import MyNovelButton from "../components/MyNovelBt";
import { MenuDrop } from "../drops/MenuDrop";

function SelectionListHeader() {
  return (
    <header className="flex flex-flow: nowrap; justify-center  ml-auto bg-blue-500 text-white font-bold">
      <div className="flex gap-2 flex-row items-center">
        <SelectionListButton />
        <HomeButton />
        <MyNovelButton />
      </div>
      <div className="flex flex-flow: nowrap; ml-auto gap-4  ">
        <MenuDrop />
      </div>
    </header>
  );
}

export default SelectionListHeader;
