import React, {useState, useEffect} from "react";
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
import { useParams } from "react-router-dom";
import axios from "axios";
const API_BASE = process.env.REACT_APP_API_BASE;

function Courses() {
  const { courseId } = useParams();
  const [course, setCourse] = useState(undefined);
  const findCourseById = async (courseId) => {
    const response = await axios.get(
      `${API_BASE}/courses/${courseId}`
    );
    setCourse(response.data);
  };
  useEffect(() => {
    findCourseById(courseId);
  }, [courseId]);
  if (!course) {
    return <div></div>
  }
  return (
    <div className="flex-grow-1 wd-flex-shrink">
      <div className="d-none d-sm-block">
        <Headbar course={course}/>
      </div>
      <div className="d-block d-sm-none">
        <AltHeadbar course={course}/>
      </div>
      <div className="d-flex">
        <div><CourseNavigation course={course}/></div>
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