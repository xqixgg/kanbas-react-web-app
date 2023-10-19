import React from "react";
import { useParams } from "react-router-dom";
import db from "../../Database";
import "./index.css";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiDotsSixVerticalLight } from "react-icons/pi"; 
function ModuleList() {
    console.log("test")
  const { courseId } = useParams();
  const modules = db.modules;
  return (
    <div>
      {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <div key={index}>
             <div className="wd-modules-outer-list">
             <div className="float-end wd-modules-button-float">
                    <button type="button" className="wd-modules-checkmark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><AiOutlineCheckCircle /></button>
                    <button><AiOutlinePlus /></button>
                    <button><BiDotsVerticalRounded /></button>
                </div>
                <h5 className="wd-modules-button-float"><button type="button" className="wd-modules-checkmark dropdown-toggle pe-2" data-bs-toggle="dropdown" aria-expanded="false"><PiDotsSixVerticalLight /></button>{module.name}</h5>
                <span className="wd-modules-description-font-size1 ps-5">{module.description}</span>
             </div>
             {
                module.lessons && (
                    <ul className="list-group wd-modules-inner-ul">
                        {
                            module.lessons.map((lesson, index) => (
                                <li key={index} className="wd-modules-inner-list">
                                    <div className="float-end wd-modules-button-float">
                                        <button type="button" className="wd-modules-checkmark dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false"><AiOutlineCheckCircle /></button>
                                        <button><AiOutlinePlus /></button>
                                        <button><BiDotsVerticalRounded /></button>
                                    </div>
                                    <h5 className="wd-modules-button-float-2"><button><PiDotsSixVerticalLight /></button>{lesson.name}</h5>
                                    <div className="wd-modules-description-font-size2 wd-module-description-padding">{lesson.description}</div>
                                    <div className="float-end"></div>
                                </li>
                            ))
                        }
                    </ul>
                )
             }
             <div className="wd-modules-space"></div>
           </div>    
      ))
      
      }
      
    </div>
  );
}
export default ModuleList;