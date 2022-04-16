import React from "react"
// import Calander from "./src/Components/Calander"
import {Inject ,ScheduleComponent , Day , Week , WorkWeek, Month , Agenda } from "@syncfusion/ej2-react-schedule"
export default class Calander2 extends React.Component{
    public render(){
    return(
        <div className="calendar2" id="calendar2">
            < ScheduleComponent >
            <Inject services={[Day, Week, WorkWeek, Month, Agenda ]} />
            </ScheduleComponent>
        </div>
    )}
}