import React from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  deleteAssignment,
  setAssignment,
} from "./assignmentsReducer";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import { BiDotsVerticalRounded, BiNotepad } from "react-icons/bi";
import { PiDotsSixVerticalLight } from "react-icons/pi";
import "./index.css";
function Assignments() {
  const { courseId } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const handleDelete = (id) => {
    const confirmation = window.confirm('Are you sure you want to remove this assignment?');

      if (confirmation) {
        dispatch(deleteAssignment(id));
      }
  };

  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  const defaultAssignment = {"title": "Systems Engineering Exam", "course": "RS103", "points": "100", "due": "2023-09-18", "availFromDate": "2023-9-5", "availUntilDate": "2023-10-5" ,"description": "Description"};
  return (
    <div className="px-2 wd-assignment-width">
      <div className="d-flex wd-assignment-min-width">
        <div className="col-2 wd-assignment-input-max-width">
            <input placeholder="Search for Assignment"/>
        </div>
        <div className="col-10 text-end">
            <button className="btn btn-light"><AiOutlinePlus />Group</button>
            <button className="btn btn-danger"
            onClick={() => {
              const id = new Date().getTime().toString();
              dispatch(setAssignment({ ...defaultAssignment, _id: id, course: courseId }));
              navigate(`/Kanbas/Courses/${courseId}/Assignments/${id}`)
            }}
            ><AiOutlinePlus />Assignment
            </button>

            <button className="btn btn-light"><BiDotsVerticalRounded /></button>
            
        </div>
      </div>
      <hr/>
      <div> 
      <div className="wd-modules-outer-list py-2">
             <div className="float-end wd-modules-button-float">
                    <button type="button" className="wd-40-of-total">40% of Total</button>
                    <button><AiOutlinePlus /></button>
                    <button><BiDotsVerticalRounded /></button>
                </div>
                <h5 className="wd-modules-button-float"><button type="button" className="wd-modules-checkmark dropdown-toggle pe-2" data-bs-toggle="dropdown" aria-expanded="false"><PiDotsSixVerticalLight /></button>Assignments</h5>
        </div>
      <div className="list-group">
        {courseAssignments.map((assignment) => (
          
            <div key={assignment._id} className="list-group-item">
                <div className="float-end wd-modules-button-float-3">
                    <button className="btn btn-danger wd-modules-delete-button me-2" 
                    onClick = {() => handleDelete(assignment._id)}>Delete</button>
                    <button><AiOutlineCheckCircle className="wd-assignment-color"/></button>
                    <button><BiDotsVerticalRounded /></button>
                </div>
                <div  className="wd-assignments d-flex">
                    <div>
                        <PiDotsSixVerticalLight/>
                        <BiNotepad className="wd-assignment-color ms-1"/>
                    </div>
                    <div className="flex-grow-1 ps-3">

                        <Link
                            key={assignment._id}
                            to={`/Kanbas/Courses/${courseId}/Assignments/${assignment._id}`}
                            className="ps-2">
                            {assignment.title}
                        </Link>
                    </div>
                </div>
            </div>    
        ))}
      </div>
      </div> 
    </div>
  );
}
export default Assignments;