import React from "react";
import SelectionListButton from "../components/SelectionListBt";
import HomeButton from "../components/HomeBt";
import MyNovelButton from "../components/MyNovelBt";
import { InputWithButton } from "../components/InputWithBt";
import { MenuDrop } from "../drops/MenuDrop";

function HomeHeader() {
  return (
    <div>
      <b className="p-8">
        &nbsp;
        <SelectionListButton />
        &nbsp; <HomeButton />
        &nbsp; <MyNovelButton />
        &nbsp; <InputWithButton />
        &nbsp; <MenuDrop />
      </b>
    </div>
  );
}

export default HomeHeader;
