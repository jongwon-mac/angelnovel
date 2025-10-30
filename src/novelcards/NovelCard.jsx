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

import { Label } from "@/components/ui/label";
import novelimage from "../assets/novelimage.png";

export function NovelCard() {
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
              <Button type="button" variant="outline" className="w-full">
                선작
              </Button>
              <br />
              <br />
              <br />
              <Button type="link" variant="outline" className="w-full">
                읽기
              </Button>
            </CardAction>
          </CardHeader>
        </div>
      </div>
    </Card>
  );
}
