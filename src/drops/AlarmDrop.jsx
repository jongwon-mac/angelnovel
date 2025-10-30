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

import { FaBell } from "react-icons/fa";

export function AlarmDrop() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <FaBell />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56" align="start">
        <DropdownMenuGroup>
          <DropdownMenuItem>알림 </DropdownMenuItem>
          <hr />
          <DropdownMenuItem>
            작품명 <span className="text-muted-foreground">선작 완료</span>
          </DropdownMenuItem>
          <hr />
          <DropdownMenuItem>
            작품명 <span className="text-muted-foreground">선작 취소</span>
          </DropdownMenuItem>
          <hr />
          <DropdownMenuItem>
            작품명 <span className="text-muted-foreground">O회차 업데이트</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
