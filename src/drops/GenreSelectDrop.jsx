"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { FaCaretDown } from "react-icons/fa";
export function GenreSelectDrop() {
  const [position, setPosition] = React.useState("bottom");

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline">
          장르
          <FaCaretDown className="ml-2" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
          <DropdownMenuRadioItem value="all">전체</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="modern">현대</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="fantasy">판타지</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="romance">로맨스</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="martial">무협</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="game">게임</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="alternate">
            대체역사
          </DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="sports">스포츠</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="ts">TS</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="horror">공포</DropdownMenuRadioItem>
          <DropdownMenuRadioItem value="etc">기타</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
