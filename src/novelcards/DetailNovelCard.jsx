import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Label } from "@/components/ui/label";
import novelimage from "../assets/novelimage.png";

export function DetailNovelCard() {
  return (
    <Card className="flex flex-col w-full max-w-sm">
      <div className="flex flex-row ">
        <div className="flex flex-col justify-center novel-cover  rounded-lg ">
          <img
            src={novelimage}
            alt="작품표지"
            className="w-23 h-30 object-cover rounded-sm transition-all duration-500 ease-in-out hover:scale-525"
          />
        </div>
        <div className="flex-1 min-w-0">
          <CardContent>
            <form className="flex flex-col justify-center">
              <div className="flex flex-col gap-3">
                <CardTitle>제목</CardTitle>
                <div className="grid gap-0">
                  <Label htmlFor="genre">장르</Label>
                </div>
                <div className="grid gap-0">
                  <div className="flex items-center">
                    <Link to="/WriterInfo">
                      <Label htmlFor="pen-name">필명</Label>
                    </Link>
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
        </div>
      </div>
    </Card>
  );
}
