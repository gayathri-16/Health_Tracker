import React from 'react'
import dayjs from 'dayjs'
// import { getMonth } from '../../utill';

export default function Days({props,days, rowIdx}) {
      // eslint-disable-next-line 
      // const[currentMonthIdx,setCurrentMonthIdx]= useState(dayjs().month);
      // const[currentMonth,setCurrentMonth]=useState(getMonth);
      //  useEffect(()=>{
      //     setCurrentMonth(getMonth(currentMonthIdx))
      //  },[currentMonthIdx])

  function getCurrentDayClass(days) {

   let number = props.number ? 'number' :'';

 const format = "DD-MM-YY";
 const nowDay = dayjs().format(format);
 const currDay = days.format(format);
 if(nowDay === currDay)
{
  return number;
}
else {
  return "";
}
  }
  return (
    <div className='days-container'>


      
        {rowIdx === 0 &&(
        <h6>{days.format("ddd").toUpperCase()}</h6>
        )}
     
     <button className= {`${ getCurrentDayClass}`}><span> {days.format("DD")}</span></button>
    </div>
  )
        
}
