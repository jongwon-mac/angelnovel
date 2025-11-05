import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "react-router-dom";

import { Label } from "@/components/ui/label";
import novelimage from "../assets/novelimage.png";

export function MyNovelCard() {
  return (
    <Card className="w-full max-w-sm">
      <div className="flex items-start ">
        <div className="novel-cover ">
          <img
            src={novelimage}
            alt="작품표지"
            className="w-23 h-30 object-cover rounded-sm"
          />
        </div>
        <div className="flex-1 min-w-0">
          <CardHeader>
            <CardContent>
              <form>
                <div className="flex flex-col gap-3">
                  <CardTitle>제목</CardTitle>
                  <div className="grid gap-0">
                    <Label htmlFor="genre">장르</Label>
                  </div>
                  <div className="grid gap-0">
                    <div className="flex items-center">
                      <Label htmlFor="pen-name">필명</Label>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Label htmlFor="views">조회수</Label>
                  </div>
                  <div className="flex items-center">
                    <Label htmlFor="likes">추천수</Label>
                  </div>
                </div>
              </form>
            </CardContent>
            <CardAction>
              <Link
                to="/NovelManage"
                type="link"
                variant="outline"
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded w-full`}
              >
                작품관리
              </Link>
              <br />
              <br />
              <br />
              <Button
                type="button"
                variant="outline"
                className={`bg-blue-500 text-white font-bold py-2 px-4 rounded w-full`}
              >
                작품삭제
              </Button>
            </CardAction>
          </CardHeader>
        </div>
      </div>
    </Card>
  );
}
