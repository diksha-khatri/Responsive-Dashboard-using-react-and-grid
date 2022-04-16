import React from "react";

export default function HeroCard(){
    return(
        <div className="herocard">
            <img className="herocard-img" src="../images/graphics-slice.jpg" />
            <h3 className="herocard-title">Graphics Slice</h3>
            <p className="herocard-subtitle margin-zero">Design studio focus on UI/UX Design</p>
            <div className="flex herocard-flex">
                <div className="dotted-border herocard-space">
                    <h3 className="herocard-title">40</h3>
                    <p className="herocard-subtitle margin-zero">Clinets</p>
                </div>
                <div className="dotted-border herocard-space">
                    <h3 className="herocard-title">#3</h3>
                    <p className="herocard-subtitle margin-zero">Reputation</p>
                </div>
                <div className="herocard-space">
                    <h3 className="herocard-title">25</h3>
                    <p className="herocard-subtitle margin-zero">Members</p>
                </div>    
            </div>
        </div>
    )
}