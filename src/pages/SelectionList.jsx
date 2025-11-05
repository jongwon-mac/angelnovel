import React from "react";
import TopHeader from "../headers/TopHeader";
import SelectionListHeader from "../headers/SelectionListHeader";
import { NovelCard } from "../novelcards/NovelCard";
function SelectionList() {
  return (
    <div>
      <TopHeader />
      <SelectionListHeader />
      <div className="flex flex-col items-center gap-3">
        선작목록
        <NovelCard />
        <hr />
        <NovelCard />
      </div>
    </div>
  );
}

export default SelectionList;
