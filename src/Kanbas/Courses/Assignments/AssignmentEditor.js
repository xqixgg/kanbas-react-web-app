import React from "react";
import { useNavigate, useParams, Link } from "react-router-dom";
import { AiOutlineCheckCircle } from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useSelector, useDispatch } from "react-redux";
import {
  addAssignment,
  updateAssignment,
  setAssignment,
} from "./assignmentsReducer";

function AssignmentEditor() {
  const assignments = useSelector((state) => state.assignmentsReducer.assignments);
  const assignment = useSelector((state) => state.assignmentsReducer.assignment);
  
  const dispatch = useDispatch();
  const { courseId, assignmentId } = useParams();
  const navigate = useNavigate();
  const handleSave = () => {
    navigate(`/Kanbas/Courses/${courseId}/Assignments`);
  };
  const currAssignment = assignments.find((x) => x._id === assignmentId);
  const saveOrUpdate = () => {
    if (!currAssignment) {
      dispatch(addAssignment());
    } else {
      dispatch(updateAssignment(assignment));
    }
  };
  
  if (!assignment || assignment._id !== assignmentId) {
    if (currAssignment) {
      dispatch(setAssignment(currAssignment));
    } else {
      dispatch(setAssignment(assignment));
    }
    return null;
  }

  return (
    <div className="px-4 wd-assignment-width">
      <div className="text-end">
        <button className="wd-assignment-color wd-assignments-published "><AiOutlineCheckCircle/>Published</button>
        <button className="btn btn-light"><BiDotsVerticalRounded /></button>
      </div>  
      <h5>Assignment Name</h5>
      <div>
        <input value={assignment.title}
                className="form-control mb-2" onChange={(e) => dispatch(setAssignment({
                  ...assignment, title: e.target.value }))}/>
        <textarea className="form-control mb-2" value={assignment.description} 
                  onChange={(e) => dispatch(setAssignment({
                  ...assignment, description: e.target.value }))}/>
        <div className="outer-div">
        <div className="col-8 inner-div">
          <div className="row">
            <div className="col-2">
              <label className="mt-3">Points</label>
            </div>
            <div className="col-10 mt-2">
              <input className="form-control" type="number" value={assignment.points} placeholder="100"
              onChange={(e) => dispatch(setAssignment({
                ...assignment, points: e.target.value }))}></input>
            </div>
          </div>
          
          <div className="mt-3 row">
            <div className="col-2">
              <label>Assign</label>
            </div>
            <div className="col-10">
              <div className="form-control">
                <label>Due</label><br/>
                <input className="form-control" type="date" onChange={(e) => dispatch(setAssignment({
                  ...assignment, due: e.target.value }))}/>
                <div className="row my-3">
                  <div className="col-6">
                    <label>Available from</label><br/>
                    <input className="form-control" type="date" onChange={(e) => dispatch(setAssignment({
                  ...assignment, availFromDate: e.target.value }))}></input>
                  </div>
                  <div className="col-6">
                    <label>Until</label><br/>
                    <input className="form-control" type="date" onChange={(e) => dispatch(setAssignment({
                  ...assignment, availUntilDate: e.target.value}))}></input>
                  </div>
                  </div>
                  </div>      
            </div>
          </div>
        </div> 
        </div>
        <br/>
        <br/>
        <br/>
        <hr/>
        <div className="text-end">            
        <Link to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-light">
            Cancel
        </Link>
        {/* <Link onClick={handleSave}
                to={`/Kanbas/Courses/${courseId}/Assignments`}
                className="btn btn-success me-2">
            Save
        </Link> */}
        <button  onClick={() => {saveOrUpdate();
                                  handleSave()}
                          } className="btn btn-danger me-2">
            Save
        </button>
        </div>
      </div>  
      <hr/>
    </div>

  );
}


export default AssignmentEditor;