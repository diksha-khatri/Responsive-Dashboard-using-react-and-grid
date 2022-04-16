import React from "react"
import { BsFillGrid1X2Fill} from "react-icons/bs";
import {RiFileSearchLine} from "react-icons/ri"
import {AiOutlineLineChart} from "react-icons/ai"
import {HiOutlineUsers} from "react-icons/hi"
import {AiOutlineSetting} from "react-icons/ai"
import {RiShutDownLine} from "react-icons/ri"
import {GiTumbleweed} from "react-icons/gi"

export default function Nav(){
    return (<div className="nav-container ">
       
        <ul className="nav-ul">
            <li>
            <GiTumbleweed className="nav-logo" />
            </li>
            <li className="active">
                < BsFillGrid1X2Fill />
            </li>
            <li>
                < RiFileSearchLine />
            </li>
            <li>
                < AiOutlineLineChart />
            </li>
            <li>
                < HiOutlineUsers />
            </li>
            <li>
                < AiOutlineSetting />
            </li>
            
        </ul>
        <div className="nav-shutdown-btn">
            < RiShutDownLine />
        </div>
    </div>)
}