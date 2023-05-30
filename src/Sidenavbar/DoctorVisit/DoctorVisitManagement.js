import React,{useState, useContext, useEffect} from 'react';
import { Link } from 'react-router-dom';
import DoctorVisit from './DoctorVisit';
import Week from './Week';
import BigMonthCalendar from './BigMonthCalendar'
import Appoinment from './Appoinment';
import Month from './Month'
import GlobalContext from '../../context/GlobalContext';
import './Doctor css folder/doctorvisitmanagement.css'
import './Doctor css folder/appoinment.css'
import './Doctor css folder/view-availability.css'
import { getMonth } from '../../utill';
import dayjs from 'dayjs';
// import SmallCalendar from './SmallCalendar';

function DoctorVisitManagement() {
     const [show,setShow]=useState(false);
     const[viewAvailabel, setViewAvailabel]=useState(false);
     const[viewAvailability, setViewAvailability]=useState(false);
     const[viewWeek, setViewWeek]=useState(false);


     // eslint-disable-next-line 
     const [currentMonth,setCurrentMonth] = useState(getMonth())
     const [showAppoinment, setShowAppoinment] = useState(false);
     const {monthIndex,setMonthIndex} = useContext(GlobalContext);
     useEffect(()=>{
        setCurrentMonth(getMonth(monthIndex))
     },[monthIndex])

     const handlePreMonth= ()=>{
        setMonthIndex(monthIndex - 1)
     }
     const handleNxtMonth= ()=>{
        setMonthIndex(monthIndex + 1)
     }
     const handleReset=()=>{
        setMonthIndex(dayjs().month())
     }
    return (
        <div>
            <DoctorVisit/>

            <div id="doctors-list">

                   <div className="short-profile"onClick={()=>setShow(!show)}>
                    <div className="round-img">
                      <div className='doc-image'>
                       <img src="https://freepngimg.com/thumb/man/22654-6-man-thumb.png" alt="" />
                     </div>
                    </div>
                    <div id="doc-name">
                        <h3>Dr.John Basco</h3>
                        <p>ortho Specialist</p>
                    </div>
                    <div className='achive'>
                         <span><i class="fa-solid fa-star"></i>44</span>
                         <p>Alredy in touch</p>
                    </div>
                   </div> 

                   <div className="short-profile">
                    <div className="round-img">
                      <div className='doc-image'>
                       <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5YwyI9RB0PE0pi7iUvCSqcEANLzL_9xC3JUVv4hbwqg5nb4FE1z4I4ViJPZkrjgy8SI&usqp=CAU" alt="" />
                     </div>
                    </div>
                    <div id="doc-name">
                        <h3>Dr.Dravid</h3>
                        <p>Physiotherapist</p>
                    </div>
                    <div className='achive'>
                         <span><i class="fa-solid fa-star"></i>41</span>
                         <p>Alredy in touch</p>
                    </div>
                   </div> 
              


                   <div className="short-profile">
                    <div className="round-img">
                      <div className='doc-image'>
                       <img src="https://simg.nicepng.com/png/small/235-2357931_our-email-and-onsite-personalization-is-so-accurate.png" alt="" />
                     </div>
                    </div>
                    <div id="doc-name">
                        <h3>Dr.Robert Mass</h3>
                        <p>Dentist</p>
                    </div>
                    <div className='achive'>
                         <span><i class="fa-solid fa-star"></i>42</span>
                         <p>Alredy in touch</p>
                    </div>
                   </div> 
              


                   <div className="short-profile">
                    <div className="round-img">
                      <div className='doc-image'>
                       <img src="https://www.seekpng.com/png/detail/8-85135_business-woman-png.png" alt="" />
                     </div>
                    </div>
                    <div id="doc-name">
                        <h3>Dr.Alvin</h3>
                        <p>Pediatrician</p>
                    </div>
                    <div className='achive'>
                         <span><i class="fa-solid fa-star"></i>43</span>
                         <p>Alredy in touch</p>
                    </div>
                   </div> 
              


                   <div className="short-profile">
                    <div className="round-img">
                      <div className='doc-image'>
                       <img src="https://www.pngitem.com/pimgs/m/256-2563233_business-woman-transparent-background-hd-png-download.png" alt="" />
                     </div>
                    </div>
                    <div id="doc-name">
                        <h3>Dr.Louis</h3>
                        <p>Pediatrician</p>
                    </div>
                    <div className='achive'>
                         <span><i class="fa-solid fa-star"></i>44</span>
                         <p>Alredy in touch</p>
                    </div>
                   </div> 
              
              
                   <div className="short-profile">
                    <div className="round-img">
                      <div className='doc-image'>
                     <img src="https://media.istockphoto.com/id/477815446/photo/passport-picture-of-a-woman-with-dark-hair-and-blouse.jpg?s=612x612&w=0&k=20&c=KpmHVq4G03AgbDyo8fWSAW1Nmiq4QJBc6r-uY7Q3IB4=" alt="" />     
                      </div>
                    </div>
                    <div id="doc-name">
                        <h3>Dr.Emma</h3>
                        <p>ortho Specialist</p>
                    </div>
                    <div className='achive'>
                         <span><i class="fa-solid fa-star"></i>44</span>
                         <p>Alredy in touch</p>
                    </div>
                   </div> 
                   <div className="short-profile">
                    <div className="round-img">
                      <div className='doc-image'>
                      <img src="https://us.123rf.com/450wm/stylephotographs/stylephotographs2006/stylephotographs200600247/149242122-application-photo-of-a-young-attractive-laughing-man.jpg?ver=6" alt="" />    </div>
                    </div>
                    <div id="doc-name">
                        <h3>Dr.David</h3>
                        <p>ortho Specialist</p>
                    </div>
                    <div className='achive'>
                         <span><i class="fa-solid fa-star"></i>44</span>
                         <p>Alredy in touch</p>
                    </div>
                   </div> 
                   
                   <div className="short-profile">
                    <div className="round-img">
                      <div className='doc-image'>
                       <img src="https://us.123rf.com/450wm/marctran/marctran1708/marctran170800509/83588077-passport-photo-of-asian-female-natural-look-healthy-skin.jpg?ver=6" alt="" />
                     </div>
                    </div>
                    <div id="doc-name">
                        <h3>Dr.Keral</h3>
                        <p>Dentist</p>
                    </div>
                    <div className='achive'>
                         <span><i class="fa-solid fa-star"></i>42</span>
                         <p>Alredy in touch</p>
                    </div>
                   </div>
                
               
            </div>

           {show && <div  id='doctors-bio'>
               <div  id="doc-schedule" >
                    <div className="round-img">
                       <img src="https://simg.nicepng.com/png/small/235-2357931_our-email-and-onsite-personalization-is-so-accurate.png" alt="" />
                    </div>
                    <div className='bio-of-doc'>
                        <h3>Dr.Robert Mass</h3>
                        <p className='career'>Physiotherapist</p>
                        <p className='location'><i class="fa-solid fa-location-dot fa-bounce"></i>Chennai, India</p>
                        <div className='star-marks'>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star"></i>
                         <i class="fa-solid fa-star" style={{color:"gray"}}></i>
                        </div>
                       
                    </div>
                 </div>
                    <div className='about-doc'>
                         <p>Dr.Dravid in chennai has made a <br/> rather excepional name in the city</p>
                    </div>
                    <div className='contact-info'>
                        <div className='data-heading'>
                            <p>Avilabilty </p>
                            <p>Working hours</p>
                            <p>Mobile</p> 
                        </div>
                        <div className="data">
                           <h3>Mon,Fri & Sun</h3>
                           <h3>10am - 5pm</h3>
                           <h3>+91 9874568394</h3>
                        </div>            
                    </div>

                    <div className='experiance-info'>
                        <span>
                            <p>Patients</p>
                             <h5>109k</h5>
                        </span>
                        <span>
                            <p>Experiance</p>
                             <h5>8Years</h5>
                        </span>
                         <span>
                            <p>Reviews</p>
                             <h5>109k</h5>
                        </span>
                    </div>

                    <div className='appointment-btns'>
                        <button className='book-appoinment' onClick={()=>setShowAppoinment(!showAppoinment)}>Book Apointment</button>
                        <button className='check'><i class="fa-solid fa-calendar-days"></i>check availability</button>
                    </div>
           
            </div>
            }
             
             
       

            <Appoinment primary={true}/>

          {showAppoinment &&  <div className='booking-appointment-container'>
            <div className='book-app'>
                <h2>Book Appoinment</h2>
                <p><i class="fa-solid fa-circle-xmark" onClick={()=>setShowAppoinment(showAppoinment===false)}></i></p>
           
            </div>

            <div className='available-dates'>
                <h3>Available Dates</h3>
                <button onClick={handleReset}>today</button>
                <div className='months'>
                    <button onClick={handlePreMonth}><span class="material-symbols-rounded" >chevron_left</span></button>
                     <p>{dayjs(new Date(dayjs().year(), monthIndex)).format("MMMM", "YYYY")}</p>
                    <button onClick={handleNxtMonth}><span class="material-symbols-rounded" >chevron_right</span></button>
                </div>
            </div>

            <div className='week-days'>
                {/* <SmallCalendar/> */}
            
                <Month month={currentMonth}/>
            </div>

            
           
           <div className='avail-time'>
            <h3>Available-Timings</h3>
            <div className='times'>
                <button>9:00am</button>
                <button>10:00am</button>
                <button>11:00am</button>
                <button>12:00pm</button>
                <button>1:00pm</button>
                <button>2:00pm</button>
                <button>3:00pm</button>
                <button>4:00pm</button>
                <button>5:00pm</button>
                <button>6:00pm</button>
                <button>7:00pm</button>
                <button>8:00pm</button>
            </div>
           </div>

       
                <h3 className='local'>Location</h3>
                <div className='hospital-location'>
                <img src="https://thumbs.dreamstime.com/b/hospital-style-building-59693686.jpg" alt=""  className='hospital-img'/>
                <div className='address-hospital'>
                    <h4>GM hospital</h4>
                    <p>Grand Southern Trunk Rd, New Market, <br/> Tambaram West, Tambaram, Chennai, <br/> Tamil Nadu 600045 </p>
                </div>
                <img src="https://i0.wp.com/www.cssscript.com/wp-content/uploads/2018/03/Simple-Location-Picker.png?fit=561%2C421&ssl=1" alt="" className='map'/>
                </div>
      

               <div className='appoinment-btns' onClick={()=>setShowAppoinment(showAppoinment===false)}>
               <Link to="/rateus"><button id="confirm" onClick={()=> setViewAvailabel(!viewAvailabel)} >Confirm</button></Link> 
                <button>Cancel</button>
               </div>
            </div>
}
{viewAvailabel &&  
        <div className='view-availability'>
         <div className='booking-appointment-container'>
            <div className='book-app'>
                <h2>View Availability</h2>
                <i class="fa-solid fa-circle-xmark" onClick={()=>setViewAvailabel(viewAvailabel===false)}></i> 
            </div>

            <div className='available-dates' id="available-btns">
                <div id="month-week" onClick={()=> (setViewWeek(viewWeek===false))}>
                <button onClick={()=> (setViewWeek(!viewWeek))}>Week</button>
                <button onClick={()=> (setViewAvailability(!viewAvailability))}>Month</button>
                </div>
                <div className='months'>
                    <button onClick={handlePreMonth}><span class="material-symbols-rounded" >chevron_left</span></button>
                     <p>NewDay</p>
                    <button onClick={handleNxtMonth}><span class="material-symbols-rounded" >chevron_right</span></button>
                </div>
            </div>

       
           <div className='week-days' >
           <Week/>
           </div>
            
         <h1>hello</h1>
               {/* <div className='appoinment-btns'>
                <button id="confirm">Book Appoinment</button>
               
               </div> */}
            </div>
    </div>
}
{viewAvailability &&  
        <div className='view-availability'>
         <div className='booking-appointment-container'>
            <div className='book-app'>
                <h2>View Availability</h2>
                <i class="fa-solid fa-circle-xmark" onClick={()=>setViewAvailabel(viewAvailabel===false)}></i> 
            </div>

            <div className='available-dates' id="available-btns">
                <div id="month-week" onClick={()=> (setViewAvailability(viewAvailability===false))}>
                <button onClick={()=> (setViewWeek(!viewWeek))}>Week</button>
                <button onClick={()=> (setViewAvailability(!viewAvailability))}>Month</button>
                </div>
                <div className='months'>
                    <button onClick={handlePreMonth}><span class="material-symbols-rounded" >chevron_left</span></button>
                     <p>NewDay</p>
                    <button onClick={handleNxtMonth}><span class="material-symbols-rounded" >chevron_right</span></button>
                </div>
            </div>

         
            
           <div className='week-days'>
           <BigMonthCalendar/>
           </div>
           

            <h1>hi</h1>
           
           
          
      

               {/* <div className='appoinment-btns'>
                <button id="confirm">Book Appoinment</button>
               
               </div> */}
            </div>
    </div>
}
        </div>
    );
}

export default DoctorVisitManagement;