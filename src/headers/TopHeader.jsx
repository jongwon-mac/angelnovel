import React from "react";
import LogoButton from "../components/LogoBt";
import { AlarmDrop } from "../drops/AlarmDrop";

function TopHeader() {
  return (
    <div className="p-8">
      <LogoButton />
      <AlarmDrop />
    </div>
  );
}

export default TopHeader;
