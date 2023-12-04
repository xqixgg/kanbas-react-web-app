import { Link, useLocation } from "react-router-dom";
import { BiUserCircle } from "react-icons/bi";
import { RiDashboard3Fill } from "react-icons/ri";
import { FaBook, FaCreativeCommonsSa } from "react-icons/fa";
import { BsFillCalendar2WeekFill } from "react-icons/bs";
import { AiOutlineInbox } from "react-icons/ai";
import { HiOutlineDesktopComputer } from "react-icons/hi";
import { AiOutlineHistory, AiOutlineQuestionCircle } from "react-icons/ai";
import { BsFillSignIntersectionFill } from "react-icons/bs";
import { SiGnuprivacyguard } from "react-icons/si";
import "./index.css";
function KanbasNavigation() {
  const links = ["Signin", "Signup","Account", "Dashboard", "Courses","Calendar","Inbox","History","Studio","Commons","Help"];

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
    <div className="list-group wd-kanbas-navigation d-none d-sm-block">
      <div><img src="/NEU.jpg" alt="" />
        </div>  
      {links.map((link, index) => (
        <Link
          key={index}
          to={`/Kanbas/${link}`}
          className={`list-group-item ${pathname.includes(link) && "active"}`}
        >
          {linkToIconMap[link]}
          <br/>
          {link}
        </Link>
      ))}
    </div>
  );
}
export default KanbasNavigation;