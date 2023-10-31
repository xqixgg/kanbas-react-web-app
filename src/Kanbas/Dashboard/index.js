import {React } from "react";
import { Link } from "react-router-dom";
import "./index.css";
import { BiNotepad, BiDotsVerticalRounded } from "react-icons/bi";
function Dashboard(
  { courses, course, setCourse, addNewCourse,
    deleteCourse, updateCourse }
  
) {
  // const [courses, setCourses] = useState(db.courses);
  // const [course, setCourse] = useState({
  //   name: "New Course",      number: "New Number",
  //   startDate: "2023-09-10", endDate: "2023-12-15",
  // });

  // const updateCourse = () => {
  //   setCourses(
  //     courses.map((c) => {
  //       if (c._id === course._id) {
  //         return course;
  //       } else {
  //         return c;
  //       }
  //     })
  //   );
  // };
  
  // const addNewCourse = () => {
  //   setCourses([...courses, { ...course, _id: new Date().getTime()}]);
  // };
  // const deleteCourse = (courseId) => {
  //   setCourses(courses.filter((course) => course._id !== courseId));
  // };

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
      <div className="pt-2 ps-5 pe-2">
        <div className="row">
          <div className="col-3">
            <input value={course.name} className="form-control"
                  onChange={(e) => setCourse({ ...course, name: e.target.value }) } />
          </div>
          <div className="col-3">        
            <input value={course.number} className="form-control"
                  onChange={(e) => setCourse({ ...course, number: e.target.value }) } />
          </div>
          <div className="col-3">
            <input value={course.startDate} className="form-control" type="date"
                  onChange={(e) => setCourse({ ...course, startDate: e.target.value }) }/>
          </div>
          <div className="col-3">
            <input value={course.endDate} className="form-control" type="date"
                  onChange={(e) => setCourse({ ...course, endDate: e.target.value }) } />
          </div>
        </div>     
      <div className="text-end my-2">  
        <button className="btn btn-success" onClick={addNewCourse} >
          Add
        </button>
        <button className="btn btn-primary ms-2" onClick={updateCourse} >
          Update
        </button>
      </div>
      </div>
      <div className="d-flex flex-row flex-wrap ps-5 pe-2">
        <div className="row ms-0 me-0 wd-course-max-width">
                {courses.map((course, index) => (
                <div key={index} className="card wd-card-width p-0">
                <div className="wd-card-color-placeholder">
                <div className="float-end"><BiDotsVerticalRounded /></div>
                </div>

                <div className="card-body">
                    <Link
                    to={`/Kanbas/Courses/${course._id}`}
                    >
                    <div className="text-truncate card-title-color">
                        {course.number} {course._id} {course.name}
                    </div>
                    <div className="card-title-color2 text-truncate">
                        {course.number}.{course._id}.{course.endDate.slice(0,4)}{course.endDate.slice(5,7)}
                    </div>
                    <div className="card-title-color3 text-truncate">
                        {course.endDate.slice(0,4)}{course.endDate.slice(5,7)}_2 {parseInt(course.startDate.slice(5,7)) < 9 ? <span>Spring</span> : <span>Fall</span>} {course.startDate.slice(0,4)} Full Term Grad
                    </div>    
                    </Link>
                    <br></br>
                    <div className="row">
                    <div className="col-2">  
                    <Link
                    to={`/Kanbas/Courses/${course._id}/assignments`}
                    className="ps-1 card-assignment-color"
                    >
                    <BiNotepad/>   
                    </Link>
                    </div>
                    <div className="text-end col-10">
                      <button className=" btn btn-warning"
                        onClick={(event) => {
                          event.preventDefault();
                          setCourse(course);
                        }}>
                        Edit
                      </button>
                      <button className="btn btn-danger ms-2"
                        onClick={(event) => {
                          event.preventDefault();
                          deleteCourse(course._id);
                        }}>
                        Delete
                      </button>

                    </div>
                    </div>  
                </div>
                </div>
                ))}
        </div>
      </div>
    </div>
  );
}
export default Dashboard;