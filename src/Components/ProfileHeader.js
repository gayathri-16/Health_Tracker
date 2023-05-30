import React,{useState} from 'react';
import '../CssFiles/create_profile.css';
import { Link} from "react-router-dom";
function ProfileHeader(props) {

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
        <div>
              <div className='title'>  
                <img className='title_image' src="https://www.transparentpng.com/thumb/heart/picture-heart-outline-png-30.png" alt="logo"/><span> <h2>Health Tracker</h2></span> 
              </div>

                <div className='enter_data' style={{marginLeft:'18rem'}}>
                    <h1>Welcome! Create your healthy profile</h1>
                    <p>Keep moving & Stay healthy</p>
                    <h6>Add an avatar</h6>
                    <div className='upload_photo' id="enhance-photo">
                    <div className='circle'>
                        {
                            image&&
                            image.map((image, index)=>{
                              return(
                                <img src={image} alt="" />
                              )
                            })
                        }
                    <i className="fa-solid fa-camera" style={{marginLeft:"0.2rem"}} id="camera"></i>
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
            <div className='btn_container'>
             <Link to='/navbar'> <button id='next'>Next</button></Link>
            </div>
        </div>
    );
}

export default ProfileHeader;