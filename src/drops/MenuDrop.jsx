import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { IoMenuOutline } from "react-icons/io5";

export function MenuDrop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="outline"
          className={`bg-blue-500 text-white font-bold py-2 px-4 rounded `}
        >
          <IoMenuOutline />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>회원가입/로그인</DropdownMenuItem>
          <hr />
          <DropdownMenuItem>가이드</DropdownMenuItem>
          <hr />
          <DropdownMenuItem>문의/의견</DropdownMenuItem>
          <hr />
          <DropdownMenuItem>신고목록</DropdownMenuItem>
          <hr />
          <DropdownMenuItem>공지사항</DropdownMenuItem>
          <hr />
          <DropdownMenuItem>버전정보</DropdownMenuItem>
        </DropdownMenuGroup>
        <hr />

        <DropdownMenuItem>로그아웃</DropdownMenuItem>
        <hr />
        <DropdownMenuItem>회원탈퇴</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
