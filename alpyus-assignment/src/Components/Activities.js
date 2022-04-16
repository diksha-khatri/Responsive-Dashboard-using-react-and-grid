import React from "react";
import {IoIosArrowForward} from "react-icons/io"
import {VscDebugStackframeDot} from "react-icons/vsc"

export default function Activities(props){
    return(
        <div className="activities flex">
            <div className="day-date">
                <h3 className="date">{props.date}</h3>
                <p className="day">{props.day}</p>
            </div>
            <div className="column2-title">
                <h4 className="activity-title">{props.title}</h4>
                <div className="flex dot-time">
                <span className="light small">UI Design</span>
                <span className="dot" ><VscDebugStackframeDot/></span>
                <span className="small">{props.time}</span>
                </div>
            </div>
            <div className="forward-arrow"><IoIosArrowForward /></div>
        </div>
    )
}