import React,{useState} from 'react';
import { Calendar, dateFnsLocalizer } from 'react-big-calendar';
import format from 'date-fns/esm/format';
import parse from 'date-fns/parse';
import startOfWeek from 'date-fns/startOfWeek';
import getDay from "date-fns/getDay";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css"
import DatePicker  from 'react-datepicker';


const locales = {
    "en-Us":require("date-fns/locale/en-Us")
}

const localizer = dateFnsLocalizer
({
    format,
    parse,
    startOfWeek,
    getDay,
    locales
})

const events =[
    {
        title : "Big Meeting",
        allDay:true,
        start: new Date(2023,4,14),
        end:new Date(2023,4,19)
    },
    {
        title : "vocation",
        start: new Date(2023,4,23),
        end:new Date(2023,4,25)
    },
    {
        title : "Confrence",
        start: new Date(2023,4,3),
        end:new Date(2023,4,7)
    },
    {
        title : "Big Meeting",
        start: new Date(2023,6,0),
        end:new Date(2023,6,0)
    }
]

function BookAppoinment() {

 const [newEvent, setNewEvent] = useState({title:"", start:"", end:""});
 
 const [allEvent, setAllEvent] = useState(events);

 const handleEvents= ()=>{
    setAllEvent([...allEvent, newEvent])
 }

    return (
       <div>
         <h1>hello</h1>
         <DatePicker placeholderText = "Start Date" style={{marginRight:"10px"}}
         selected={newEvent.title} onChange={(start)=>setNewEvent({...newEvent,start})}/>
         <button style={{marginTop:"10px"}} onClick={handleEvents}>Confirm</button>
        <Calendar localizer={localizer}
          events={allEvent} 
          startAccessor="start" 
          endAccessor="end" 
          style={{height:"500px", margin:"50px"}} />
        </div>
    );
}

export default BookAppoinment;