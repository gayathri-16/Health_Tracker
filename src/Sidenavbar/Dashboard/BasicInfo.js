import React,{useState} from 'react';
import DashBoard from '../Dashboard/DashBoard'
import GetBasicInfo from '../Dashboard/GetBasicInfo'
import '../NavcssFiles/basicinfo.css'
import { Link} from "react-router-dom";


function BasicInfo() {

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
      <>
     
          <DashBoard/>  
 
   
      <div id="basic-info-container">

          <div id="image-section">
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
                     <i className="fa-solid fa-camera"  style={{marginLeft:"0.1rem",marginTop:"0.1rem"}} id="camera"></i>
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
           </div>  <br/>

           <br/>

          

           <div id="profile-section">
           <GetBasicInfo/>
           </div>
       
            <div id="basic-form-btn">
              <Link to='/addmedicalhistory' > <button className='next'>Next</button></Link> <button >Cancle</button> 
            </div>

     </div>
 
      </>
    );
}

export default BasicInfo;