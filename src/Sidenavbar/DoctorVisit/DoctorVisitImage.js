import React from 'react';
import '../NavcssFiles/navbar.css'
import './Doctor css folder/doctor.css'
import { Link } from 'react-router-dom';
import DoctorVisit from './DoctorVisit';
function DoctorVisitImage() {
    return (
        <div className='view_container'>
              <DoctorVisit/>
              <div id='setprofile'>
                <img src="https://img.freepik.com/free-vector/hospital-service-concept-flat-illustration_1150-50287.jpg?size=626&ext=jpg&ga=GA1.1.552476124.1682496624&semt=robertav1_2_sidr" alt=""  id="pic_routine"/> 
                <div id='set'><h2 >Doctors add days to the Life <Link to="/add doctor" className='add-doc-link'><b>Add Doctor</b></Link> </h2></div>  
            </div>
        </div>
    );
}

export default DoctorVisitImage;