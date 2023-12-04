import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaCreativeCommonsSa } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineHistory, AiOutlineQuestionCircle, AiOutlineClose } from "react-icons/ai";
import { BsFillSignIntersectionFill } from "react-icons/bs";
import { SiGnuprivacyguard } from "react-icons/si";

import "./index.css";
function AltKanbasNavigation(props) {
  const links = ["Signin", "Signup", "Account", "Dashboard", "Courses","Calendar","Inbox","History","Studio","Commons","Help"];

  const linkToIconMap = {
    Signin: <BsFillSignIntersectionFill className="wd-icon"/>,
    Signup: <SiGnuprivacyguard className="wd-icon"/>,
    Account: <BiUserCircle className="wd-icon"  id="account-icon" />,
    Dashboard: <RiDashboard3Fill className="wd-icon" />,
    Courses: <FaBook className="wd-icon" />,
    Calendar: <BsFillCalendar2WeekFill className="wd-icon" />,
    Inbox: <AiOutlineInbox className="wd-icon" />,
    History: <AiOutlineHistory className="wd-icon" />,
    Studio: <HiOutlineDesktopComputer className="wd-icon" />,
    Commons: <FaCreativeCommonsSa className="wd-icon"/>,
    Help: <AiOutlineQuestionCircle className="wd-icon" />
  };

  const { pathname } = useLocation();
  return (
    <div>
       <div className="flex-grow-1 text-end">
        <button id="closeKanbasNavButton" onClick={props.onClose} className="wd-close"><AiOutlineClose /></button> 
       </div>
       <div className="wd-alt-kanbas">
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}{link}
        </Link>
        
      ))}
      </div>
    </div>
  );
}
export default AltKanbasNavigation;