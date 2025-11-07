import React from "react";
import SelectionListButton from "../components/SelectionListBt";
import HomeButton from "../components/HomeBt";
import MyNovelButton from "../components/MyNovelBt";
import { InputWithButton } from "../components/InputWithBt";
import { MenuDrop } from "../drops/MenuDrop";
function HomeHeader() {
  return (
    <header className="flex flex-flow: nowrap; justify-center   bg-blue-500 text-white font-bold ">
      <div className="flex gap-2 flex-row items-center">
        <SelectionListButton />
        <HomeButton />
        <MyNovelButton />
      </div>
      <div className="flex flex-flow: nowrap; ml-auto gap-4">
        <div className="bg-white text-black rounded-md">
          <InputWithButton />
        </div>
        <MenuDrop />
      </div>
    </header>
  );
}

export default HomeHeader;
