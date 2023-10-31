import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { BsEyeSlash } from "react-icons/bs";

function CourseNavigation({course}) {
  const links = ["Home", "Modules","Piazza","Zoom Meetings","Assignments", "Quizzes","Grades","People","Panoto Video","Discussions","Announcements","Pages","Files","Rubrics","Outcomes","Collaborations","Syllabus","Progress Reports(EAB Nagative)","Settings"];
  const { courseId } = useParams();
  const { pathname } = useLocation();

  return (
    <div className="wd-course-navigation list-group ps-3 d-none d-sm-block">
      <div className="ps-4 text-truncate wd-course-navigator-header-font-size">{course.endDate.slice(0,4)}{course.endDate.slice(5,7)}_2 {parseInt(course.startDate.slice(5,7)) < 9 ? <span>Spring</span> : <span>Fall</span>} {course.startDate.slice(0,4)} Full Term Grad</div>  
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(encodeURIComponent(link)) && "active"}`}
        >
          {link} {index>8 && index<17 && <BsEyeSlash className="wd-eye-color float-end"/> }
        </Link>
      ))}
    </div>
  );
}

export default CourseNavigation;