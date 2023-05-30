import React from 'react';
import { useState } from 'react';
import DashBoard from './DashBoard'
import '../NavcssFiles/dashboard.css'
import '../NavcssFiles/navbar.css'
import '../NavcssFiles/addReport.css'
import FileUpload from './FileUpload'
import ListOfFile from './ListOfFile'



function AddReport() {

   
  const [files,setFiles]=useState([

]);
   
  const removeFile = (filename)=>{
    setFiles(files.filter(file => file.name !== filename))
  }
     console.log(files);
       
    return (
      <>
        <div className='dashboard_containter' id="files-container"> 
            <DashBoard/>  
        </div>
       <div id='file-component'>
            <ListOfFile files={files} removeFile={removeFile}/> 
            <FileUpload  files={files} setFiles={setFiles} removeFile={removeFile}/>                                        
      
        </div>     
          
          
      
         
         
             
        </>
    );
}

export default AddReport;