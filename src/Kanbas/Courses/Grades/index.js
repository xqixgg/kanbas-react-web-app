import db from "../../Database";
import { useParams } from "react-router-dom";
import "./index.css";
import { AiOutlineImport, AiOutlineExport } from "react-icons/ai";
import { BsFillGearFill, BsChevronDown } from "react-icons/bs";
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { CiFilter } from "react-icons/ci";
function Grades() {
  const { courseId } = useParams();
  const assignments = db.assignments.filter((assignment) => assignment.course === courseId);
  const enrollments = db.enrollments.filter((enrollment) => enrollment.course === courseId);
  return (
    <div className="px-4">
      <div className="row mx-0">
        <div className="col">
        <button type="button" className="wd-grades-gradebook-dropdown dropdown-toggle my-2" data-bs-toggle="dropdown" aria-expanded="false">Gradebook</button>
        </div>
        <div className="col text-end">
          <button className="btn btn-light ms-2"><AiOutlineImport/> Import </button>
          <button className="btn btn-light ms-2"><AiOutlineExport/> Export </button>
          <button className="btn btn-light ms-2"><BsFillGearFill/> </button>
        </div>
      </div>
      <div className="py-2">
        <div className="row py-1 mx-0">
          <div className="col-6">Student Names</div>
          <div className="col-6">Assignment Names</div>
        </div>
        <div className="row mx-0">
          <div className="col-6">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text wd-append-height" id="basic-addon3"><PiMagnifyingGlassBold/></span>
              </div>
              <input id="sname" type="text" class="form-control" placeholder="Search Students" />
              <div class="input-group-append">
                  <span class="input-group-text wd-append-height" id="basic-addon4"><BsChevronDown/></span>
              </div>
          </div>
            </div>
            <div className="col-6">
            <div class="input-group mb-3">
              <div class="input-group-prepend">
                  <span class="input-group-text wd-append-height" id="basic-addon3"><PiMagnifyingGlassBold/></span>
              </div>
              <input id="sname" type="text" class="form-control" placeholder="Search Assignments" />
              <div class="input-group-append">
                  <span class="input-group-text wd-append-height" id="basic-addon4"><BsChevronDown/></span>
              </div>
          </div>
            </div>  
          </div>
        <div>
            <button className="btn btn-light ms-2"><CiFilter/> Apply Filters</button>  
        </div>  
      </div>
      
      <div className="ms-2 my-2">
      <div className="table-responsive wd-grades-table-width">
        <table className="table wd-grades-responsive-width table-striped table-bordered center-column">
          <thead>
            <th>Student Name</th>
            {assignments.map((assignment) => (<th>{assignment.title}</th>))}
          </thead>
          <tbody>
            {enrollments.map((enrollment) => {
              const user = db.users.find((user) => user._id === enrollment.user);
              return (
                <tr>
                   <td  className="wd-assignment-student-name"><a href="#/Kanbas/Courses/RS101/Grades">{user.firstName} {user.lastName}</a></td>
                   {assignments.map((assignment) => {
                     const grade = db.grades.find(
                       (grade) => grade.student === enrollment.user && grade.assignment === assignment._id);
                       return (<td>{grade?.grade || ""}</td>);})}
                </tr>);
            })}
          </tbody></table>
      </div>
      </div>
    </div>);
}
export default Grades;