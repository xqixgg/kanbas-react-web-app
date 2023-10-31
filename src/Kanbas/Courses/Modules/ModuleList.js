import React from "react";
import { useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  addModule,
  deleteModule,
  updateModule,
  setModule,
} from "./modulesReducer";

import "./index.css";
import {AiOutlineCheckCircle, AiOutlinePlus} from "react-icons/ai";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { PiDotsSixVerticalLight } from "react-icons/pi"; 
function ModuleList() {
    console.log("test")
  const { courseId } = useParams();
  const modules = useSelector((state) => state.modulesReducer.modules);
  const module = useSelector((state) => state.modulesReducer.module);
  const dispatch = useDispatch();
  return (
    <div>
      <div>
        <ul className="list-group my-4">
          <li className="list-group-item">
            <div className="float-end">
            <button className="btn btn-primary" 
              onClick={ () => dispatch(updateModule(module))}>
                Update</button>
            <button className="btn btn-success"
              onClick={() => dispatch(addModule({...module, course: courseId}))}>Add</button>
            </div>
            <input className="col-8" value={module.name}
              onChange={(e) => dispatch(setModule({
                ...module, name: e.target.value }))}
            />
            <textarea className="col-8" value={module.description}
              onChange={(e) => dispatch(setModule({
                ...module, description: e.target.value }))}
            />
                            
          </li>
        </ul> 
      </div>                              
  {
        modules
         .filter((module) => module.course === courseId)
         .map((module, index) => (
           <div key={index}>
             <div className="wd-modules-outer-list">
             <div className="float-end wd-modules-button-float">
                      <button className="btn btn-danger wd-modules-delete-button"
                      onClick={() => dispatch(deleteModule(module._id))}>
                      Delete
                    </button>
                    <button className="btn btn-success wd-modules-edit-button"
                      onClick={() => dispatch(setModule(module))}>
                      Edit
                    </button>
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
                                        <button className="wd-modules-checkmark"><AiOutlineCheckCircle /></button>
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