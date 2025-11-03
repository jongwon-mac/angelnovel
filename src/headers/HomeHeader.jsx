import React from "react";
import SelectionListButton from "../components/SelectionListBt";
import HomeButton from "../components/HomeBt";
import MyNovelButton from "../components/MyNovelBt";
import { InputWithButton } from "../components/InputWithBt";
import { MenuDrop } from "../drops/MenuDrop";

function HomeHeader() {
  return (
    <header className="flex flex-flow: nowrap; items-center  ml-auto bg-blue-500 text-white font-bold">
      <div>
        <SelectionListButton />
        <HomeButton />
        <MyNovelButton />
      </div>
      <div className="flex flex-flow: nowrap; ml-auto gap-4  ">
        <div className="bg-white text-black rounded-md">
          <InputWithButton />
        </div>
        <MenuDrop />
      </div>
    </header>
  );
}

export default HomeHeader;
