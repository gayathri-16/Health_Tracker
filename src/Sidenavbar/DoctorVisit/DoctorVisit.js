import React from 'react';
import '../NavcssFiles/navbar.css'
import './Doctor css folder/doctor.css'
import { Link } from 'react-router-dom';
import SideNavbar from '../../Sidenavbar/SideNavbar';
function DoctorVisit() {
    return (
        <div className='view_container' id="doct-contain">
            <div className='top_nav'>
                <div id="title_logo">
                    <span className='header_space'>
                        <h2>Doctor Visits</h2>  
                    </span>     
                </div>
                <div id="add-doctor">
                       <i class="fas fa-search"></i>
                        <input type="text"  placeholder="Search Doctor"/>
                       <Link to="/add doctor" id="adddoctor">  + Add Doctor</Link>
                </div>
                     
             
                <div className='profile_detail'>
                    <div id="out_circle"><img src="https://i.pinimg.com/736x/1e/27/c8/1e27c8ebb7c0791a4bece5a28ab98d3c.jpg" alt="" id="pic_profile"/></div>
                    <span>
                      <select id="select">
                        <option value="" key="">lorem ipsum</option>
                      </select>
                    </span>
                </div>
            </div>

         <SideNavbar/>
        
    

        </div>
    );
}

export default DoctorVisit;