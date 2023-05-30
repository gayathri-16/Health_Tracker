import React,{useState} from 'react';
import { Link} from "react-router-dom";
// import DashBoard from '../Dashboard/DashBoard'
import GetBasicInfo from '../Dashboard/GetBasicInfo'

import SideNavbar from '../SideNavbar';
import './Doctor css folder/add-doctor.css'
function AddDoctor() {
  const [image, setImage]=useState([]);

  const handleImage=(e)=>{
      const selectedFiles = e.target.files;
      const selectedFilesArray = Array.from(selectedFiles);
  
      const imagesArray = selectedFilesArray.map((file)=>{
          return URL.createObjectURL(file)
      });
      setImage(imagesArray);
   }
    return (

      <div className='dashboard_containter' style={{marginTop:"-1rem"}}>
      <div  className='side-nav'>     
       <SideNavbar/>
       </div>
           <div id='addmember'>
               <div id="arrow_icon"><span class="material-symbols-rounded" id="arrow">chevron_left</span><span>Add Member</span></div> 
                <div><span class="material-symbols-rounded" id="close">cancel</span></div>
            </div>

            <div className='doctor-info'>
           
          
            </div>

      <div className="add-doctor-container">
    
          <div id="image-section" className='avatar-place'>
          <h3>Doctor Information</h3>
          <p className='add-photo'>Add an avatar</p>
             <div id='upload_photo'>
                     <div className='circle'>
                         {
                             image&&
                             image.map((image, index)=>{
                               return(
                                 <img src={image} alt="" />
                               )
                             })
                         }
                     <i className="fa-solid fa-camera" style={{marginTop:"0.1rem",marginLeft:"0.1rem"}}id="camera"></i>
                     </div>
                    <button id="btn">
                     Choose image
                     <input 
                      type="file" 
                     
                      onChange={handleImage} 
                      multiple accept='image/png, image/jpeg,image/webp'
                      />
              
                   </button>
                 </div>
           </div>
            
           <div id="profile-section" className='profile-container'>
           <GetBasicInfo/>
           </div>
             <div id="basic-form-btn" className='form-btns'>
                    <Link to='/doctorvisitmanagement' > <button className='next'>Next</button></Link> 
              </div>
         </div>
    </div>      

    );
}

export default AddDoctor;