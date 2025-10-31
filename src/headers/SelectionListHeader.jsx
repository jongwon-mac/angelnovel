import React from "react";
import SelectionListButton from "../components/SelectionListBt";
import HomeButton from "../components/HomeBt";
import MyNovelButton from "../components/MyNovelBt";
import { MenuDrop } from "../drops/MenuDrop";

function SelectionListHeader() {
  return (
    <div>
      <b className="p-8">
        &nbsp;
        <SelectionListButton />
        &nbsp; <HomeButton />
        &nbsp; <MyNovelButton />
        &nbsp; <MenuDrop />
      </b>
    </div>
  );
}

export default SelectionListHeader;
