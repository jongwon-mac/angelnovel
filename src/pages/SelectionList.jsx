import React from "react";
import TopHeader from "../headers/TopHeader";
import SelectionListHeader from "../headers/SelectionListHeader";
import { NovelCard } from "../novelcards/NovelCard";
function SelectionList() {
  return (
    <div>
      <TopHeader />
      <div>
        <SelectionListHeader />
      </div>
      <div>
        <NovelCard />
      </div>
    </div>
  );
}

export default SelectionList;
