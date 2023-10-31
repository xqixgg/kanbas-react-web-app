import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import "./index.css";
import { HiOutlineMenu } from "react-icons/hi";
import { LuGlasses } from "react-icons/lu";
import { BsChevronDown} from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import AltCourseNavigation from "../CourseNavigation/altcoursenavigation";
import AltKanbasNavigation from "../../KanbasNavigation/altKanbasNavigation";

function AltHeadbar ({course}) {
    const {pathname} = useLocation();
    const components = decodeURIComponent(pathname).split("/");
    const screen = components[4];
    
    const [displayState, setDisplayState] = useState('none');
    const [courseDisplayState, setCourseDisplayState] = useState('none');

    const toggleDisplay = () => {
        setDisplayState(displayState === 'none' ? 'block' : 'none')
    }

    const toggleCourseDisplay = () => {
        setCourseDisplayState(courseDisplayState === 'none' ? 'block' : 'none')
    }

    

    return (
        <div className="py-3 ps-4 pe-5 wd-top-altheader mb-4 d-flex wd-min-width">
            <div className="row flex-grow-1">
                <div className="col-2">
                    <button className="wd-alt-button" id="showKanbasNavButton"><HiOutlineMenu onClick={toggleDisplay}/></button>  
                </div>
                <div className="col-8 text-center">
                    <span>{course.number}.{course._id}.{course.endDate.slice(0,4)}{course.endDate.slice(5,7)}</span><br/>
                    <span>{screen}</span>
                </div>
                <div className="col-2">
                    <div className="row">
                        <div className="col-6"><button className="wd-alt-button"><LuGlasses /> </button > </div>
                        <div className="col-6"><button className="wd-alt-button"  onClick={toggleCourseDisplay}>{courseDisplayState==='none'?<BsChevronDown/>:<AiOutlineClose/>}</button > </div>

                    </div>
                    
                </div>
            </div>
            <div className="wd-alt-kanbas-navigation" style={{'display' : displayState}}>
                <AltKanbasNavigation onClose={toggleDisplay}/>
            </div>
            <div className="wd-alt-course-navigator" style={{'display' : courseDisplayState }}>
                <AltCourseNavigation onClose={toggleCourseDisplay}/>
            </div>
      </div>
    )
}

export default AltHeadbar;