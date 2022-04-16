import React from "react";


export default function TramMemebers(props){
    return(
        
            <div className="teamMembers">
                <div className="flex">
                    <img className="teamMember-img" src={props.img} />
                    <div className="border">
                        <h3 className="memberName">{props.name}</h3>
                        <p className="member-job">{props.designation}</p>
                    </div>
                </div>
            </div>
        
    )
}