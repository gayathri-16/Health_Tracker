import React from 'react';
import '../NavcssFiles/dashboard.css'
import '../NavcssFiles/navbar.css'
import '../NavcssFiles/basicinfo.css'
import {Link } from 'react-router-dom';

import SideNavbar from '../SideNavbar';
function DashBoard(props) {

    return (
        <div className='dashboard_containter'>
        <div className='sidenav-component'>
        <SideNavbar/>
        </div>
    
         <div className='dashboard_details'>
           
            <div className='addmember'>
               <div id="arrow_icon"><span class="material-symbols-rounded" id="arrow">chevron_left</span><span>Add Member</span></div> 
                <div><span class="material-symbols-rounded" id="close">cancel</span></div>
            </div>
        
            <div id='header_info'>      
            
                <div className="line"> <Link to="/basicinfo" className="infolink"><h4>Basic Info <hr/></h4></Link></div>
                <div className="line" id="line1"><Link to="/addmedicalhistory" className="infolink"> <h4>Add Medical History <hr/></h4></Link> </div>
                <div className="line" id="line2"><Link to="/addmedicalreport" className="infolink"> <h4>Report <hr/></h4></Link> </div>           
             
            </div>
            
         </div>
     <div id="basic-info-container" className='base-container'>

     </div>
     </div>
    );
}

export default DashBoard;