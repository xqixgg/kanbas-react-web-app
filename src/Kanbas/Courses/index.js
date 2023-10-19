import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import Headbar from "./Headbar";
import AltHeadbar from "./Headbar/altheadbar";

function Courses() {
  return (
    <div className="flex-grow-1 wd-flex-shrink">
      <div className="d-none d-sm-block">
        <Headbar />
      </div>
      <div className="d-block d-sm-none">
        <AltHeadbar />
      </div>
      <div className="d-flex">
        <div><CourseNavigation /></div>
        <div className="flex-grow-1 wd-flex-shrink">
            <div
            
            //   style={{
            //     left: "320px",
            //     top: "100px",
            //   }}
            >
            <Routes>
                <Route path="/" element={<Navigate to="Home" />} />
                <Route path="Home" element={<Home/>} />
                <Route path="Modules" element={<Modules/>} />
                <Route path="Assignments" element={<Assignments/>} />
                <Route
                path="Assignments/:assignmentId"
                element={<AssignmentEditor/>}
                />
                <Route path="Grades" element={<Grades/>} />
            </Routes>
            </div>
        </div>
      </div>  
    </div>
  );
}

export default Courses;