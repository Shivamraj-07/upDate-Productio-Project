import React from "react";
import TrendingCourse from "../Course/TrendingCourse";
import ApplyCourse from "../Course/ApplyCourse";
import NavBar from "../LandingPage/NavBar";
import "../Course/course.css";

const CoursePage = () => {
  return (
    <>
      <NavBar />
      <div className="p-10">
        <TrendingCourse />
        <ApplyCourse />
      </div>
    </>
  );
};

export default CoursePage;
