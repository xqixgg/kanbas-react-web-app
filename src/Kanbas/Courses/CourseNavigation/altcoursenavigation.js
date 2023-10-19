import { Link, useParams, useLocation } from "react-router-dom";
import "./index.css";
import { BsEyeSlash, BsHouse, BsPlug, BsRocketTakeoff, BsCircle, BsGear } from "react-icons/bs";
import { MdOutlineAssignment, MdOutlineAssignmentTurnedIn } from "react-icons/md";
import { GoPeople } from "react-icons/go";
import { LuMessagesSquare,LuNewspaper } from "react-icons/lu";
import { HiOutlineSpeakerphone, HiOutlineCubeTransparent } from "react-icons/hi";
import { AiOutlineFolder } from "react-icons/ai";
import { BiNotepad } from "react-icons/bi";
import { TbTargetArrow } from "react-icons/tb";
import { GiNotebook } from "react-icons/gi";
function AltCourseNavigation() {
  const links = ["Home","Modules","Piazza","Zoom Meetings","Assignments", "Quizzes","Grades","People","Panoto Video","Discussions","Announcements","Pages","Files","Rubrics","Outcomes","Collaborations","Syllabus","Progress Reports(EAB Nagative)","Settings"];
  const linkToIconMap = {"Home": <BsHouse />, 
                "Modules": <HiOutlineCubeTransparent className="wd-alt-icon-color"/>,
                "Piazza": <BsPlug />,
                "Zoom Meetings": <BsPlug />,
                "Assignments": <MdOutlineAssignment/> , 
                "Quizzes": <BsRocketTakeoff />,
                "Grades": <MdOutlineAssignmentTurnedIn/ >,
                "People": <GoPeople />,
                "Panoto Video": <BsPlug />,
                "Discussions": <LuMessagesSquare />,
                "Announcements": <HiOutlineSpeakerphone />,
                "Pages": <LuNewspaper />,
                "Files": <AiOutlineFolder/>,
                "Rubrics": <BiNotepad/>,
                "Outcomes": <TbTargetArrow/>,
                "Collaborations": <BsCircle />,
                "Syllabus": <GiNotebook/>,
                "Progress Reports(EAB Nagative)": <BsPlug />,
                "Settings": <BsGear />};              
  const { courseId } = useParams();
  const { pathname } = useLocation();
  return (
    <div>
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/Courses/${courseId}/${link}`}
          className={`list-group-item ${pathname.includes(encodeURIComponent(link)) && "active"}`}
        >
          {linkToIconMap[link]}<span className="ps-2 pe-3">{link}</span> {index>8 && index<17 && <BsEyeSlash className="wd-eye-color"/> }
        </Link>
      ))}
    </div>
  );
}

export default AltCourseNavigation;