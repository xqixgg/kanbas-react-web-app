import { Link } from "react-router-dom";
import db from "../Database";
import "./index.css";
import { BiNotepad, BiDotsVerticalRounded } from "react-icons/bi";
function Dashboard() {
  const courses = db.courses;
  return (
    <div className="wd-flex-grow-1">
      <div className="pt-4 ps-4 pe-2">
        <h1>Dashboard</h1>
        <hr />
      </div>
      <div className="pt-2 ps-5 pe-2">
        <h2>Published Courses ({courses.length})</h2>
        <hr />
      </div>
    
      <div className="d-flex flex-row flex-wrap ps-5 pe-2">
        <div className="row ms-0 me-0 wd-course-max-width">
                {courses.map((course, index) => (
                <div className="card wd-card-width p-0">
                <div className="wd-card-color-placeholder">
                <div className="float-end"><BiDotsVerticalRounded /></div>
                </div>

                <div className="card-body">
                    <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}`}
                    >
                    <div className="text-truncate card-title-color">
                        {course.number} {course._id} {course.name}
                    </div>
                    <div className="card-title-color2">
                        {course.number}.{course._id}.{course.endDate.slice(0,4)}{course.endDate.slice(5,7)}
                    </div>
                    <div className="card-title-color3 text-truncate">
                        {course.endDate.slice(0,4)}{course.endDate.slice(5,7)}_2 {parseInt(course.startDate.slice(5,7)) < 9 ? <span>Spring</span> : <span>Fall</span>} {course.startDate.slice(0,4)} Full Term Grad
                    </div>    
                    </Link>
                    <br></br>
                    <Link
                    key={course._id}
                    to={`/Kanbas/Courses/${course._id}/assignments`}
                    className="ps-1 card-assignment-color"
                    >
                    <BiNotepad/>   
                    </Link>
                    
                </div>
                </div>
                ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;