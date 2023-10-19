import React from "react";
import { Link, useParams } from "react-router-dom";
import db from "../../Database";
import { FaBan } from "react-icons/fa";
import {AiOutlineCheckCircle, AiOutlineBell, AiOutlineClose } from "react-icons/ai";
import { FaFileImport } from "react-icons/fa";
import { BiLogoCreativeCommons, BiTargetLock } from "react-icons/bi";
import { BsFillBarChartLineFill } from "react-icons/bs";
import { HiOutlineSpeakerphone  } from "react-icons/hi";
import { PiNumberCircleOneBold } from "react-icons/pi";
import { SlCalender } from "react-icons/sl";

import "./index.css";


function Status() {
  const { courseId } = useParams();
  const assignments = db.assignments;
  const courseAssignments = assignments.filter(
    (assignment) => assignment.course === courseId);
  return (
    <div className="pe-2">
        <div className="mt-3">
            <h5>Course Status</h5>
            <div className="wd-status-50">
                <button className="btn btn-light"><FaBan /><span className="ps-1">Unpublish</span></button>
                <button className="btn btn-success"><AiOutlineCheckCircle /><span className="ps-1">Published</span></button>
            </div>
        </div>
        <div className="mt-3 wd-status-quicklink">
            <button className="btn btn-light mt-1"><FaFileImport /><span className="ps-1">Import Existing Content</span></button>
            <button className="btn btn-light mt-1"><BiLogoCreativeCommons /><span className="ps-1">Import From Commons</span></button>
            <button className="btn btn-light mt-1"><BiTargetLock/><span className="ps-1">Choose Home Pages</span></button>
            <button className="btn btn-light mt-1"><BsFillBarChartLineFill/><span className="ps-1">View Course Stream</span></button>
            <button className="btn btn-light mt-1"><HiOutlineSpeakerphone/><span className="ps-1">New Announcement</span></button>
            <button className="btn btn-light mt-1"><BsFillBarChartLineFill /><span className="ps-1">New Analytics</span></button>
            <button className="btn btn-light mt-1"><AiOutlineBell /><span className="ps-1">View Course Notifications</span></button>
        </div>
        <div>
            <div className="mt-2 wd-margin-override">
                <h5>To Do</h5>
                <hr className="px-4 wd-100-width"/>
            </div>
            <div>
                <div class="row wd-status-todo wd-margin-override">
                    <div className="col-sm-1 wd-padding-override"><PiNumberCircleOneBold /></div>                    
                    <div className="col-sm-10 wd-padding-override">
                        <a className="wd-slides" href="#/Kanbas/Courses/RS101/Home"><span class="px-3 text-truncate">Grade A1 - ENV + HTML</span></a><br/>
                        <span className="px-3 text-truncate" >100 points * Sep 18 at 11:59pm</span>
                    </div>
                    <div className="col-sm-1 wd-padding-override"><AiOutlineClose/></div>
                </div>
            </div>
        </div>
        <div>
        <div class="mt-3">
            <div>
                <div className="row">
                    <div className="col-6"><h5>Coming Up</h5></div>
                    <div className="col-6 text-end wd-status-todo">
                        <SlCalender /><span class="ps-1"><a href="#/Kanbas/Courses/RS101/Home">View Calendar</a></span>
                </div>
                </div>   
                <hr className="px-4 wd-100-width"/>
                
            </div>

        </div>
        <div className="wd-status-todo">
            <div className="my-2 row wd-margin-override">
                <div className="col-1 my-2 wd-padding-override">
                    <SlCalender />
                </div>
                <div className="col-11 my-2">
                    <a href="#/Kanbas/Courses/RS101/Home"><div className="mx-3 text-truncate">Lecture</div></a>
                    <div className="mx-3 text-truncate">CS4550 12631.202410</div>
                    <div className="mx-3 text-truncate">Sep 11 at 11:45am</div>
                </div>
            </div>

            <div className="my-2 row wd-margin-override">
                <div className="col-1 my-2 wd-padding-override">
                    <SlCalender />
                </div>
                <div className="col-11 my-2">
                    <a href="#/Kanbas/Courses/RS101/Home"><div className="mx-3 text-truncate">CS5610 06 SP23 Lecture</div></a>
                    <div className="mx-3 text-truncate">CS4550 12631.202410</div>
                    <div className="mx-3 text-truncate">Sep 11 at 6pm</div>
                </div>
            </div>

            <div className="my-2 row wd-margin-override">
                <div className="col-1 my-2 wd-padding-override">
                    <SlCalender />
                </div>
                <div className="col-11 my-2">
                    <a href="#/Kanbas/Courses/RS101/Home"><div className="mx-3 text-truncate">CS5610 Web Development Summer 1 2023 - LECTURE</div></a>
                    <div className="mx-3 text-truncate">CS4550 12631.202410</div>
                    <div className="mx-3 text-truncate">Sep 11 at 7am</div>
                </div>
            </div>

            
        </div>
        <div className="wd-comingup-text-red">12 more in the next week...</div>

        </div>

        </div>
  );
}
export default Status;