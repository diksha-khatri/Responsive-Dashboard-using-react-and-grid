import React from "react";
import Calander from "./Calander";
// import Calander2 from "./Calander2"
import Activities from "./Activities";
import ActivitiesData from "./ActivitiesData";

export default function Column2(){
    const activity = ActivitiesData.map( data => {
        return <Activities key={data.id} date ={data.date} day={data.day} title={data.title} time={data.time} />
    })
    return(
        <div className="column2">
            < Calander />
            {/* <div className="calendar2"> <Calander2 /></div> */}
            
            <div>
                <h3>Today</h3>
                {activity}
            </div>
        </div>
    )
}