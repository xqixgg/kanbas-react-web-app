import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import db from "../../Database";

function AssignmentEditor() {
  const { assignmentId } = useParams();
  const assignment = db.assignments.find(
    (assignment) => assignment._id === assignmentId);

  const { courseId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    console.log("Actually saving assignment TBD in later assignments");
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  return (
    <div className="px-4 wd-assignment-width">
      <div className="text-end">
        <button className="wd-assignment-color wd-assignments-published "><AiOutlineCheckCircle/>Published</button>
        <button className="btn btn-light"><BiDotsVerticalRounded /></button>
      </div>  
      <h5>Assignment Name</h5>
      <div className="text-end">
        <input value={assignment.title}
                className="form-control mb-2" />     
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light">
            Cancel
        </Link>
        {/* <Link onClick={handleSave}
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-success me-2">
            Save
        </Link> */}
        <button onClick={handleSave} className="btn btn-danger me-2">
            Save
        </button>
      </div>  
      <hr/>
    </div>
  );
}


export default AssignmentEditor;