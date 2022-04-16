import React from 'react';
import { useState } from 'react';
import Calendar from "react-calendar"
// import { Scheduler } from "@aldabil/react-scheduler";

import 'react-calendar/dist/Calendar.css';


export default function Calander(){
    const [date,setDate] = useState(new Date())
    const onChange = date =>{
        setDate(date)
    }
    return(
      <div className='calendar'>
        <Calendar onChange={onChange} value={date} />
      </div>
      //   <Scheduler
      //   view="month"
      //   events={[
      //     {
      //       event_id: 1,
      //       title: "Event 1",
      //       start: new Date("2021/5/2 09:30"),
      //       end: new Date("2021/5/2 10:30"),
      //     },
      //     {
      //       event_id: 2,
      //       title: "Event 2",
      //       start: new Date("2021/5/4 10:00"),
      //       end: new Date("2021/5/4 11:00"),
      //     },
      //   ]}
      // />
      
    )
}

// import React, { Component } from 'react'

// import SchedulerCalendar from 'scheduler-calendar'
// import 'scheduler-calendar/dist/index.css'

// export default class Example extends Component {
//   render() {
//     return (
//       <SchedulerCalendar
//               availabilities={[
//                 {
//                   day: "mon",
//                   slots: [
//                     {from: '09:00', to: '10:30'},
//                     {from: '11:30', to: '13:00'},
//                     {from: '14:30', to: '17:00'},
//                   ],
//                   comment: "Test comment"
//                 },
//                 {
//                   day: "2021-01-26",
//                   slots: [
//                     {from: '09:00', to: '10:30'},
//                     {from: '11:30', to: '19:00'},
//                   ]
//                 },
//               ]}
//               availabilityType={'infinity'}
//               duration={10}
//               onIntervalChange={() => {}}
//             />
//     )
//   }
// }
