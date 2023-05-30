import React from 'react';
import { useState } from 'react';
import DashBoard from '../Dashboard/DashBoard';
import { Link } from 'react-router-dom';
import '../NavcssFiles/dashboard.css'
import '../NavcssFiles/addmedicalhistory.css'
function AddmedicalHistory() {
 
   const [firstshow, togglefirstShow]=useState(true);
   const [secondshow, togglesecondShow]=useState(true);
   const [thirdshow, togglethirdShow]=useState(true);

   const [fourthshow, togglefourthShow]=useState(true);
   const [fifthshow, togglefifthShow]=useState(true);
   const [sixthshow, togglesixthShow]=useState(true);

   const [seventhshow, toggleseventhShow]=useState(true);
   const [eighthshow, toggleeighthShow]=useState(true);
   const [ninethshow, toggleninethShow]=useState(true);

   const [tenthshow, toggletenthShow]=useState(true);
   const [eleventhshow, toggleeleventhShow]=useState(true);
   const [twelvethshow, toggletwelvethShow]=useState(true);

   const [thirteenshow, togglethirteenShow]=useState(true);
   const [fourteenshow, togglefourteenShow]=useState(true);
   const [fifteenshow, togglefifteenShow]=useState(true);

    return (
        <div className='dashboard_containter'>
          <DashBoard/>
          <div className='medicalhistory_container'>
              <div className='medical_condition'>
                 <p id="side_hedder">Medical Condition Past or present</p>
                 <div className='deases_lebelcontainer'>
                 <span className='deases_element'><label>Asthma <input type="checkbox" id="deases-name"  checked/></label><span className='level'> Severity level <input type="radio" name="radio1" id="radio1"/> <input type="radio" name="radio2" id="radio2" /><input type="radio" name="radio3" id="radio3"/><input type="radio" name="radio4" id="radio4" /></span></span>
                 <span className='deases_element'><label>High blood presure <input type="checkbox"  id="deases-name" /></label><span className='level'> Severity level  <input type="radio" id="radio1"/><input type="radio" id="radio2" /><input type="radio" id="radio3"/><input type="radio"id="radio4" /></span></span>
                 <span className='deases_element' id="diabetes"><label>Diabetes<input type="checkbox" id="deases-name"  /></label><span className='level'> Severity level  <input type="radio" id="radio1"/><input type="radio" id="radio2" /><input type="radio" id="radio3"/><input type="radio"id="radio4" /></span></span>
                 </div>
                 <div className='deases_input'>
                    <input type="text" id="enter_deases"/>
                    <input type="text" id="enter_deases" />
                    <input type="text" id="enter_deases"/>
                 </div>
                 <div className='deases_lebelcontainer lebelcontainer2 '>
                 <span className='deases_element'><label>Jointpain <input type="checkbox" id="deases-name"  /></label><span className='level'> Severity level  <input type="radio" id="radio1"/><input type="radio" id="radio2" /><input type="radio" id="radio3"/><input type="radio"id="radio4" /></span></span>
                 <span className='deases_element'><label>Untitled <input type="checkbox" id="deases-name"  /></label><span className='level'> Severity level  <input type="radio" id="radio1"/><input type="radio" id="radio2" /><input type="radio" id="radio3"/><input type="radio"id="radio4" /></span></span>
                 </div>
                 <div className='deases_input input2'>
                    <input type="text" id="enter_deases"/>
                    <input type="text" id="enter_deases" />                   
                 </div>
                 <h4 id="add_more">+Add More</h4>
              </div>     


              <div className='medical_condition' id="allergy_container">
                 <p id="side_hedder">Allergies</p>
                 <div className='deases_lebelcontainer'>
                 <span className='deases_element'><label>Food <input type="checkbox" id="deases-name" /></label><span className='level'> Severity level <input type="radio"  id="radio1"/><input type="radio" id="radio2"/><input type="radio" id="radio3"/><input type="radio" id="4"/></span></span>
                 <span className='deases_element'><label>Medicines <input type="checkbox" id="deases-name"  /></label><span className='level'> Severity level <input type="radio" id="radio1" /><input type="radio" id="radio2" /><input type="radio" id="radio3"/><input type="radio" id="radio4" /></span></span>
                 <span className='deases_element' id="diabetes"><label>Insect bite<input type="checkbox" id="deases-name" /></label><span className='level'> Severity level <input type="radio" id="radio1"/><input type="radio" id="radio2" /><input type="radio" id="radio3"/><input type="radio" id="radio4" /></span></span>
                 </div>
                 <div className='deases_input'>
                    <input type="text" id="enter_deases"/>
                    <input type="text" id="enter_deases" />
                    <input type="text" id="enter_deases"/>
                 </div>
                 <h4 id="add_more1">+Add More</h4>
              </div>     
            
              
              <div className='medical_condition' id="medication_container">
                 <p id="side_hedder">Medications</p>
                 <div className='deases_lebelcontainer'>
                 <span className='deases_element'><label>Diabetes <input type="checkbox" id="deases-name" /></label><span className='level' id="severity_level"> Severity level <span id="close_btns"> <div id="close" onClick={()=> togglefirstShow(!firstshow)}>{ firstshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>} </div><hr/><div id="close" onClick={()=> togglesecondShow(!secondshow)}>{ secondshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div><hr/><div id="close"  onClick={()=> togglethirdShow(!thirdshow)}>{ thirdshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div></span></span></span>
                
                 <span className='deases_element'><label>High blood presure <input type="checkbox" id="deases-name" /></label><span className='level first_close' id="severity_level"> Severity level <span id="close_btns"> <div id="close" onClick={()=> togglefourthShow(!fourthshow)}>{ fourthshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>} </div><hr/><div id="close" onClick={()=> togglefifthShow(!fifthshow)}>{ fifthshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div><hr/><div id="close"  onClick={()=> togglesixthShow(!sixthshow)}>{ sixthshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div></span></span></span>
                 <span className='deases_element' id="diabetes"><label>High blood presures<input type="checkbox" id="deases-name" /></label><span className='level second_close' id="severity_level"> Severity level <span id="close_btns"> <div id="close" onClick={()=> toggleseventhShow(!seventhshow)}>{ seventhshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>} </div><hr/><div id="close" onClick={()=> toggleeighthShow(!eighthshow)}>{ eighthshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div><hr/><div id="close"  onClick={()=> toggleninethShow(!ninethshow)}>{ ninethshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div></span> </span></span>
                 </div>
                 <div className='deases_input'>
                    <input type="text" id="enter_deases"/>
                    <input type="text" id="enter_deases" />
                    <input type="text" id="enter_deases"/>
                 </div>
                 <div className='deases_lebelcontainer lebelcontainer2 '>
                 <span className='deases_element' id="diabetes"><label id="diabetes_deases">Diabetes<input type="checkbox" id="deases-name" /></label><span className='level third_close' id="severity_level"> Severity level <span id="close_btns"> <div id="close" onClick={()=> toggletenthShow(!tenthshow)}>{ tenthshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>} </div><hr/><div id="close" onClick={()=> toggleeleventhShow(!eleventhshow)}>{ eleventhshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div><hr/><div id="close"  onClick={()=> toggletwelvethShow(!twelvethshow)}>{ twelvethshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div></span> </span></span>
                 <span className='deases_element' id="diabetes"><label id="asthma_deases">Asthma<input type="checkbox" id="deases-name" /></label><span className='level fourth_close' id="severity_level"> Severity level <span id="close_btns"> <div id="close" onClick={()=> togglethirteenShow(!thirteenshow)}>{ thirteenshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>} </div><hr/><div id="close" onClick={()=> togglefourteenShow(!fourteenshow)}>{ fourteenshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div><hr/><div id="close"  onClick={()=> togglefifteenShow(!fifteenshow)}>{ fifteenshow || <i class="fa-solid fa-circle-xmark" id='wrong' ></i>}</div></span> </span></span>
               </div>
                 <div className='deases_input input2'>
                    <input type="text" id="enter_deases"/>
                    <input type="text" id="enter_deases" />                   
                 </div>
                 <h4 id="add_more">+Add More</h4>
              </div>  

              <div id="add-form-btn" >
               <Link to='/addmedicalreport'> <button className='next'>Next</button></Link> <button >Cancle</button> 
              </div>
             

                
            </div>
        </div>
    );
}

export default AddmedicalHistory;