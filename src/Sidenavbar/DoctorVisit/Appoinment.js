import React,{useState} from 'react';
import './Doctor css folder/appoinment.css';
function Appoinment(props) {
    const[showbtn, setShowbtn] = useState(false);
    const[showdoctwo, setShowdoctwo] = useState(false);
    const[showdocthree, setShowdocthree] = useState(false);
    const[showdocfour, setShowdocfour] = useState(false);
    const[showdocfive, setShowdocfive] = useState(false);
    const[showdocsix, setShowdocsix] = useState(false);
    const[showcancel,setShowcancelled] = useState(false);
    const[hidebtn,setHidebtn]=useState(true);
    const[reschedulebtn,setReschedule] = useState(false);

    const[showcanceltwo,setShowcancelledtwo] = useState(false);
    const[hidebtntwo,setHidebtntwo]=useState(true);
    const[reschedulebtntwo,setRescheduletwo] = useState(false)

    const[showcancelthree,setShowcancelledthree] = useState(false);
    const[hidebtnthree,setHidebtnthree]=useState(true);
    const[reschedulebtnthree,setReschedulethree] = useState(false)

    const[showcancelfour,setShowcancelledfour] = useState(false);
    const[hidebtnfour,setHidebtnfour]=useState(true);
    const[reschedulebtnfour,setReschedulefour] = useState(false)

    const[showcancelfive,setShowcancelledfive] = useState(false);
    const[hidebtnfive,setHidebtnfive]=useState(true);
    const[reschedulebtnfive,setReschedulefive] = useState(false)

    const[showcancelsix,setShowcancelledsix] = useState(false);
    const[hidebtnsix,setHidebtnsix]=useState(true);
    const[reschedulebtnsix,setReschedulesix] = useState(false)


    let changecolor = props.primary ?'primary':" ";
    const handleClick =()=>{
     setShowbtn(!showbtn);
     setShowcancelled(!showcancel);
   
    }
    const showDoctwo= ()=>{
        setShowdoctwo(!showdoctwo);
        setShowcancelledtwo(!showcanceltwo);
    }
    const showDocthree= ()=>{
        setShowdocthree(!showdocthree);
        setShowcancelledthree(!showcancel);
    }
    const showDocfour= ()=>{
        setShowdocfour(!showdocfour);
        setShowcancelledfour(!showcancel);
    }
    const showDocfive= ()=>{
        setShowdocfive(!showdocfive);
        setShowcancelledfive(!showcancel);
    }
    const showDocsix= ()=>{
        setShowdocsix(!showdocsix);
        setShowcancelledsix(!showcancel);
    }

   

    
    return (
        <div className='appoinment-container'>
            <div id="appoinments">
                <h4>Appoinments</h4>
                <div id="search-doctor">
                       <i class="fas fa-search"></i>
                       <input type="text"  placeholder="Search Doctor wise  Date, Time, Phone..."/>
                </div>
                <div className='booking-btns'>
                    <button>Upcoming</button>
                    <button>Complete</button>
                    <button>Canclled</button>
                </div>
            </div>
            <div className='booking-doc'>
                <table>
                    <tbody>
                    <tr key="">
                         <th className="heading-doctor">Doctor</th>
                         <th className='status'>Status</th>
                         <th className='date'>Date</th>
                         <th className='time'>Time</th>
                         <th className='phno'>Phone number</th>
                    </tr>

                   <tr key="" className={'doctor-schedule ' + (showbtn ? `${changecolor}` :'')}>
                       <td className='heading-data'>
                         <div id="about-doctor-info">
                             <div className="circle-img">
                              <img src="https://simg.nicepng.com/png/small/235-2357931_our-email-and-onsite-personalization-is-so-accurate.png" alt="" />
                             </div>
                             <h5> Dr.Dravid</h5> <p>Physiotheropist</p>
                        </div>
                        
                        </td>
                        <td className='status'>{showcancel && <i class="fa-solid fa-circle-xmark" style={{color:'red',marginTop:"-0.5rem"}}></i>}{hidebtn && <span class="material-symbols-rounded">stars</span>}{reschedulebtn && <i class="fa-sharp fa-solid fa-circle-check" style={{color:'green'}}></i>}</td>
                        <td className='date'> 25/12/2021</td>
                        <td className='time'> 11:30 am</td>
                        <td className='phno'>+91 9834672346</td>
                        <td>{showcancel && <div className='reschedule'><button className='cancelled'>cancelled</button></div>}
                            {reschedulebtn && <div className='reschedule'><button className='cancelled done'>Done</button></div>}
                            {hidebtn && <div className='reschedule' onClick={()=>setHidebtn(!hidebtn)}> 
                           <button onClick={handleClick}>Cancle</button>
                           <button onClick={()=>setReschedule(!reschedulebtn)}>Reschedule</button></div> }</td>

                    </tr>
                    

   
                

                   <tr key="" className={'doctor-schedule ' + (showdoctwo ? `${changecolor}` :'')}>
                       <td className='heading-data'>
                         <div id="about-doctor-info">
                             <div className="circle-img">
                              <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRs5YwyI9RB0PE0pi7iUvCSqcEANLzL_9xC3JUVv4hbwqg5nb4FE1z4I4ViJPZkrjgy8SI&usqp=CAU" alt="" />
                             </div>
                             <h5> Dr.Jhon Basco</h5> <p>Ortho specialist</p>
                        </div>
                        
                        </td>
                        <td className='status'>{showcanceltwo && <i class="fa-solid fa-circle-xmark" style={{color:'red',marginTop:"-0.5rem"}}></i>}{hidebtntwo &&  <span class="material-symbols-rounded" style={{color:"rgb(215, 209, 33)",}}>schedule</span>}{reschedulebtntwo && <i class="fa-sharp fa-solid fa-circle-check" style={{color:'green'}}></i>} </td>
                        <td className='date'> 26/12/2021</td>
                        <td className='time'> 12:10 pm</td>
                        <td className='phno'>+91 9834684341</td>
                        <td> {showcanceltwo && <div className='reschedule'><button className='cancelled'>cancelled</button></div>}
                            {reschedulebtntwo && <div className='reschedule'><button className='cancelled done'>Done</button></div>}
                            {hidebtntwo && <div className='reschedule' onClick={()=>setHidebtntwo(!hidebtntwo)}> 
                            <button onClick={showDoctwo}>Cancle</button>
                           <button onClick={()=> setRescheduletwo(!reschedulebtntwo)}>Reschedule</button></div> }</td>
                    </tr>

             

                      
                

                     <tr key="" className={'doctor-schedule ' + (showdocthree? `${changecolor}` :'')}>
                       <td className='heading-data'>
                         <div id="about-doctor-info">
                             <div className="circle-img">
                              <img src="https://www.seekpng.com/png/detail/8-85135_business-woman-png.png" alt="" />
                             </div>
                             <h5> Dr.Alvin</h5> <p>Dentist</p>
                        </div>
                        
                        </td>
                        <td className='status'>{showcancelthree && <i class="fa-solid fa-circle-xmark" style={{color:'red',marginTop:"-0.5rem"}}></i>}{hidebtnthree && <span class="material-symbols-rounded" style={{color:"rgb(215, 209, 33)",}}>schedule</span>}{reschedulebtnthree && <i class="fa-sharp fa-solid fa-circle-check" style={{color:'green'}}></i>}</td>
                        <td className='date'> 25/12/2021</td>
                        <td className='time'> 09:30 am</td>
                        <td className='phno'>+91 9834672346</td>
                        <td>{showcancelthree && <div className='reschedule'><button className='cancelled'>cancelled</button></div>}
                            {reschedulebtnthree && <div className='reschedule'><button className='cancelled done'>Done</button></div>}
                            {hidebtnthree && <div className='reschedule' onClick={()=>setHidebtnthree(!hidebtnthree)}> 
                           <button onClick={showDocthree}>Cancle</button>
                           <button onClick={()=>setReschedulethree(!reschedulebtnthree)}>Reschedule</button></div> }
                        </td>

                    </tr> 


               


                    <tr key="" className={'doctor-schedule ' + (showdocfour ? `${changecolor}` :'')}>
                       <td className='heading-data'>
                         <div id="about-doctor-info">
                             <div className="circle-img">
                              <img src="https://www.pngitem.com/pimgs/m/256-2563233_business-woman-transparent-background-hd-png-download.png" alt="" />
                             </div>
                             <h5> Dr.Louis</h5> <p>Physiotheropist</p>
                        </div>
                        
                        </td>
                        <td className='status'>{showcancelfour && <i class="fa-solid fa-circle-xmark" style={{color:'red',marginTop:"-0.5rem"}}></i>}{hidebtnfour && <span class="material-symbols-rounded">stars</span>}{reschedulebtnfour && <i class="fa-sharp fa-solid fa-circle-check" style={{color:'green'}}></i>}</td>
                        <td className='date'> 30/12/2021</td>
                        <td className='time'> 09:00 am</td>
                        <td className='phno'>+044 8926723461</td>
                        <td>{showcancelfour && <div className='reschedule'><button className='cancelled'>cancelled</button></div>}
                            {reschedulebtnfour && <div className='reschedule'><button className='cancelled done'>Done</button></div>}
                            {hidebtnfour && <div className='reschedule' onClick={()=>setHidebtnfour(!hidebtnfour)}> 
                           <button onClick={showDocfour}>Cancle</button>
                           <button onClick={()=>setReschedulefour(!reschedulebtnfour)}>Reschedule</button></div> }
                        </td>

                    </tr>

                    <tr key="" className={'doctor-schedule ' + (showdocfive ? `${changecolor}` :'')}>
                       <td className='heading-data'>
                         <div id="about-doctor-info">
                             <div className="circle-img">
                              <img src="https://us.123rf.com/450wm/stylephotographs/stylephotographs2006/stylephotographs200600247/149242122-application-photo-of-a-young-attractive-laughing-man.jpg?ver=6" alt="" />
                             </div>
                             <h5> Dr.Mass</h5> <p>Dentist</p>
                        </div>
                        
                        </td>
                        <td className='status'>{showcancelfive && <i class="fa-solid fa-circle-xmark" style={{color:'red',marginTop:"-0.5rem"}}></i>}{hidebtnfive && <span class="material-symbols-rounded">stars</span>}{reschedulebtnfive && <i class="fa-sharp fa-solid fa-circle-check" style={{color:'green'}}></i>}</td>
                        <td className='date'> 15/12/2021</td>
                        <td className='time'> 08:00 pm</td>
                        <td className='phno'>+91 9834673599</td>
                        <td>{showcancelfive && <div className='reschedule'><button className='cancelled'>cancelled</button></div>}
                            {reschedulebtnfive && <div className='reschedule'><button className='cancelled done'>Done</button></div>}
                            {hidebtnfive && <div className='reschedule' onClick={()=>setHidebtnfive(!hidebtnfive)}> 
                           <button onClick={showDocfive}>Cancle</button>
                           <button onClick={()=>setReschedulefive(!reschedulebtnfive)}>Reschedule</button></div> }
                        </td>
                    </tr>

                    <tr key="" className={'doctor-schedule ' + (showdocsix ? `${changecolor}` :'')}>
                       <td className='heading-data'>
                         <div id="about-doctor-info">
                             <div className="circle-img">
                              <img src="https://us.123rf.com/450wm/marctran/marctran1708/marctran170800509/83588077-passport-photo-of-asian-female-natural-look-healthy-skin.jpg?ver=6" alt="" />
                             </div>
                             <h5> Dr.keral</h5> <p>Pediatrician</p>
                        </div>
                        
                        </td>
                        <td className='status'>{showcancelsix && <i class="fa-solid fa-circle-xmark" style={{color:'red',marginTop:"-0.5rem"}}></i>}{hidebtnsix && <span class="material-symbols-rounded">stars</span>}{reschedulebtnsix && <i class="fa-sharp fa-solid fa-circle-check" style={{color:'green'}}></i>}</td>
                        <td className='date'> 11/12/2021</td>
                        <td className='time'> 7:30 pm</td>
                        <td className='phno'>+91 7823343346</td>
                        <td>{showcancelsix && <div className='reschedule'><button className='cancelled'>cancelled</button></div>}
                            {reschedulebtnsix && <div className='reschedule'><button className='cancelled done'>Done</button></div>}
                            {hidebtnsix && <div className='reschedule' onClick={()=>setHidebtnsix(!hidebtnsix)}> 
                           <button onClick={showDocsix}>Cancle</button>
                           <button onClick={()=>setReschedulesix(!reschedulebtnsix)}>Reschedule</button></div> }
                        </td>

                    </tr> 
                    </tbody> 
                </table>
                <footer className='footer'>
                    <div className="row">
                        <p>5 Rows</p><span><i class="fa-regular fa-square-caret-down"></i></span>
                    </div>
                    <div className='page-section'>
                    <div className='box'><i class="fa-solid fa-backward-step" ></i></div>
                    <i class="fa-regular fa-square-caret-left" id="forward"></i>
                    <p>1 - 5 of 19</p>
                    <i class="fa-regular fa-square-caret-right" id="backward"></i>
                    <div className='box'><i class="fa-solid fa-forward-step"></i></div>
                    </div>
                </footer>
            </div>
     
        </div>
    );
}

export default Appoinment;