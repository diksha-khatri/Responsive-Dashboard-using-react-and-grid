import React from 'react';
import { useState } from 'react';
import Calendar from "react-calendar"


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
      
    )
}

