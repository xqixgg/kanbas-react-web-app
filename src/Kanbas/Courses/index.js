import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";
import JsonPre from "../../Labs/a3/JsonPre";
import db from "../Database";
import CourseNavigation from "./CourseNavigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";
import AssignmentEditor from "./Assignments/AssignmentEditor";
import Grades from "./Grades";
import "./index.css";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { LuGlasses } from "react-icons/lu";
import Headbar from "./Headbar";
import AltHeadbar from "./Headbar/altheadbar";

function Courses() {
  const { courseId } = useParams();
  const {pathname} = useLocation();
  const [empty, kanbas, courses, id, screen, assignmentid] = decodeURIComponent(pathname).split("/");
  const course = db.courses.find((course) => course._id === courseId);
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