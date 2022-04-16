import React from "react";
import { BsThreeDots } from "react-icons/bs"


export default function TeamMemberTitle(){
    return(
        <div className="flex teammember-title">
                    <h3 className="margin-zero">Team Members</h3>
                    <div><BsThreeDots /></div>
        </div>
    )
}