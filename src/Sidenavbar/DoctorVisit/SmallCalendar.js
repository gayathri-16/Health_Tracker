import React, { useEffect, useState } from 'react'
import dayjs from 'dayjs'
import { getMonth } from '../../utill';
export default function SmallCalendar() {
    // eslint-disable-next-line 
    const[currentMonthIdx,setCurrentMonthIdx]= useState(dayjs().month);
    const[currentMonth,setCurrentMonth]=useState(getMonth);
     useEffect(()=>{
        setCurrentMonth(getMonth(currentMonthIdx))
     },[currentMonthIdx])
  return (
    <div>
      {/* <p>{dayjs(new Date(dayjs().year(), currentMonthIdx)).format("MMMM YYYY")}</p> */}
      <div>
        {currentMonth[0].map((day,i) => (
            <span key={i}>{day.format("dd").charAt(0)}</span>
        ))}
        {currentMonth.map((row, i)=>(
            <React.Fragment key={i}>
                {
                    row.map((day,idx)=>(
                        <button key={idx}>
                            <span>{day.format("D")}</span>
                        </button>
                    ))
                }

            </React.Fragment>
        ))}
        
      </div>
    </div>
  )
}
