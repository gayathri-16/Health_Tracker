import React from 'react'
import Days  from './Days'
import './Doctor css folder/calendar.css'
export default function Month({month}) {
  return (
    <div>
      {month.map((row, i)=>(
        <p key={i} className='cal-days'>
            {row.map((day, idx)=>(
                <Days number={true} days={day} key={idx} rowIdx ={i} />
            ))}
        </p>
      ))}
    </div>
  )
}
