import React from "react";
import { useParams, Routes, Route, Navigate, useLocation } from "react-router-dom";

import db from "../../Database";

import "./index.css";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { LuGlasses } from "react-icons/lu";

function Headbar () {
    const { courseId } = useParams();
    const {pathname} = useLocation();
    const [empty, kanbas, courses, id, screen, assignmentid] = decodeURIComponent(pathname).split("/");
    const course = db.courses.find((course) => course._id === courseId);
    return (
        <div className="pt-4 ps-4 pe-4 wd-top-header mb-4">
        <button className="burger"><HiOutlineMenu/></button>  
        <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}> {course.number}.{course._id}.{course.endDate.slice(0,4)}{course.endDate.slice(5,7)}</Link>   {">"}    
        { assignmentid? <Link key={course._id} to={`/Kanbas/Courses/${course._id}`}>{screen} </Link>: screen}
        {assignmentid ? (<span> &gt; {db.assignments.find((assignment) => assignment._id === assignmentid).title}</span>
) : null}
        <button className="btn btn-light float-end" id="showDivButton"><LuGlasses /> Student View</button>
        <hr />
      </div>
    )
}

export default Headbar;