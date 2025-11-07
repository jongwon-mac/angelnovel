import React from "react";
import HomeMain from "./pages/HomeMain";
import HomeRanking from "./pages/HomeRanking";
import NovelManage from "./pages/NovelManage";
import HomeLatest from "./pages/HomeLatest";
import TotalReviewList from "./pages/TotalReviewList";
import TotalReviewWrite from "./pages/TotalReviewWrite";
import AddNovel from "./pages/AddNovel";
import MyNovel from "./pages/MyNovel";
import SelectionList from "./pages/SelectionList";
import { Route, Routes } from "react-router-dom";
import Login from "./pages/Login";
import Signin from "./pages/Signin";
import DetailNovel from "./pages/DetailNovel";
import ReadEpiso from "./pages/ReadEpiso";
import NovelWrite from "./pages/NovelWrite";
import EpiReviewList from "./pages/EpiReviewList";
import EpiReviewWrite from "./pages/EpiReviewWrite";
import ProfileFix from "./pages/ProfileFix";
import WriterInfo from "./pages/WriterInfo";
import NovelInfoFix from "./pages/NovelInfoFix";
function App() {
  return (
    <div className="p-8">
      <Routes>
        <Route path="/SelectionList" element={<SelectionList />} />
        <Route path="/HomeMain" element={<HomeMain />} />
        <Route path="/MyNovel" element={<MyNovel />} />
        <Route path="/HomeRanking" element={<HomeRanking />} />
        <Route path="/HomeLatest" element={<HomeLatest />} />
        <Route path="/AddNovel" element={<AddNovel />} />
        <Route path="/NovelManage" element={<NovelManage />} />
        <Route path="/TotalReviewList" element={<TotalReviewList />} />
        <Route path="/TotalReviewWrite" element={<TotalReviewWrite />} />
        <Route path="/Login" element={<Login />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/DetailNovel" element={<DetailNovel />} />
        <Route path="/ReadEpiso" element={<ReadEpiso />} />
        <Route path="/NovelWrite" element={<NovelWrite />} />
        <Route path="/EpiReviewList" element={<EpiReviewList />} />
        <Route path="/ProfileFix" element={<ProfileFix />} />
        <Route path="/EpiReviewWrite" element={<EpiReviewWrite />} />
        <Route path="/WriterInfo" element={<WriterInfo />} />
        <Route path="/NovelInfoFix" element={<NovelInfoFix />} />
      </Routes>
    </div>
  );
}

export default App;
