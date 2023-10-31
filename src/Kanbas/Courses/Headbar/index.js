import React from "react";
import { useLocation } from "react-router-dom";

import { useSelector } from "react-redux/es/hooks/useSelector";
import "./index.css";
import { HiOutlineMenu } from "react-icons/hi";
import { Link } from "react-router-dom";
import { LuGlasses } from "react-icons/lu";

function Headbar ({course}) {
    const {pathname} = useLocation();
    const components = decodeURIComponent(pathname).split("/");
    const screen = components[4];
    const assignmentid = components[5];
    const assignments = useSelector((state) => state.assignmentsReducer.assignments);
    const currAssignment = assignments.find((x) => x._id === assignmentid);
    const assignment = useSelector((state) => state.assignmentsReducer.assignment);
    return (
        <div className="pt-4 ps-4 pe-4 wd-top-header mb-4">
        <button className="burger"><HiOutlineMenu/></button>  
        <Link to={`/Kanbas/Courses/${course._id}`}> {course.number}.{course._id}.{course.endDate.slice(0,4)}{course.endDate.slice(5,7)}</Link>   {">"}    
        { assignmentid? <Link key={assignmentid} to={`/Kanbas/Courses/${course._id}/Assignments`}>{screen} </Link>: screen}
        {assignmentid ? (<span> &gt; {currAssignment? currAssignment.title: assignment.title}</span>
) : null}
        <button className="btn btn-light float-end" id="showDivButton"><LuGlasses /> Student View</button>
        <hr />
      </div>
    )
}

export default Headbar;