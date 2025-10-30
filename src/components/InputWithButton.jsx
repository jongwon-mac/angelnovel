import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { FaSearch } from "react-icons/fa";
export function InputWithButton() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="title" placeholder="제목이나 필명을 입력" />
      <Button type="submit" variant="outline">
        <FaSearch />
      </Button>
    </div>
  );
}
