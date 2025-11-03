import React from "react";
import LogoButton from "../components/LogoBt";
import { AlarmDrop } from "../drops/AlarmDrop";

function TopHeader() {
  return (
    <header className="relative w-full ">
      <div className="flex justify-center">
        <LogoButton className="w-56 sm:w-40 md:w-79 lg:w-50" />
      </div>
      <div className="absolute top-1 right-2">
        <AlarmDrop />
      </div>
    </header>
  );
}

export default TopHeader;
