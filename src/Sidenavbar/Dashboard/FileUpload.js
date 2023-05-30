import React from 'react';
import {useState} from 'react'
import axios from 'axios';
import {Document,Page} from 'react-pdf/dist/esm/entry.webpack';

import '../NavcssFiles/FileUpload.css'



const FileUpload=({files,setFiles,removeFile}) => {

    const [show,setShow]=useState(true);
    const [showpopup,setPopup]=useState(false);
    const [showsuccess,setSuccess]=useState(false);
    const [showPdf,setPdf]=useState(true);
    const [numPage, setNumPages] = useState(null);
    const[pageNumber,setPageNumber] = useState(1);
    
    function onDocumentLoadSuccess({numPages}){
        setNumPages(numPage);
        setPageNumber(1);
        console.log(onDocumentLoadSuccess);
     }

    const uploadHandler = (event)=>{
        const file = event.target.files[0];
        file.isUploading = true;
       
        setFiles([...files, file])

        //upload files

        const formData = new FormData();
        formData.append(
            file.name,
            file,
            file.name
        )

        axios.post( 'http://localhost:8080/upload')
       .then((res)=>{
            file.isUploading = false;
            setFiles([...files, file]);

          
        })

        
     
    }
    // const [numPage, setNumPages] = useState(null);
    // const[pageNumber,setPageNumber] = useState(1);
    
    // function onDocumentLoadSuccess({numPages}){
    //     setNumPages(numPage);
    //     setPageNumber(1);
    //     console.log(onDocumentLoadSuccess);
    //  }
  
    return (
        <>

    <div id='add-files'>
     <div className='upload_photo'>
         <div className='rectangle'>
          <button id="add-btn" ><i className="fa-solid fa-plus" id="camera" onClick={()=>setPopup(!showpopup)}></i> </button>  
         </div>  
        <p className='text' >Addnew</p>          
      </div>
    </div>
 
{ showpopup && <div className='popup_container'>
<div className='add_report'>
<div className='add-report-title'>
  <h2>Add Report</h2>
  <p id="symbol-close" ><i class="fas fa-times-circle" style={{marginLeft:"-2rem",marginTop:"-0.8rem"}} onClick={()=>setPopup(showpopup===false)}></i></p>
</div>

<div className='browse_image' >
 <img src="https://cdn-icons-png.flaticon.com/512/685/685681.png" alt="" />
  <h4>Drop your reports here, or <button id="browse-btn"><input id="file_input" isUploading={false} onChange={uploadHandler}  type="file" multiple accept='pdf'/><strong onClick={()=>setShow(show)}>Browse</strong></button></h4>
  <p>Supports JPG, PNG, PDF</p>
</div>

<div id="report-btn">
  <button  id="save" onClick={()=>setSuccess(!showsuccess)}> <input type="button" value={'Save'} style={{opacity:1,color:'white', border:"none", background:"transparent", width:'90px', zIndex:100,}} onClick={()=>setPopup(showpopup===false)}/></button>
  <button  onClick={()=>setPopup(showpopup===false)}>Cancle</button>
</div>
</div>
</div>   
}    

{showsuccess &&<div className='popup_container' id="ackowledgement-container">
<div className='add_report'>
<div className='add-report-title'>
 
  <h2> <i class="fa-solid fa-circle-check" style={{marginLeft:"-1.3rem",marginTop:"0.3rem"}} ></i>Success</h2>
  <p><i class="fas fa-times-circle" style={{marginLeft:"-1.8rem",marginTop:"-0.5rem"}} onClick={()=>setSuccess(showsuccess===false)}></i></p>
</div>

<div className='view_image'>
    <h4>A memeber has been added, Click to <button id="browse-btn"  onClick={()=>setPdf(showPdf===false)}><strong>View</strong></button></h4>

</div>

<div  id="report-btn">
  <button  id="ok"  onClick={()=>setSuccess(showsuccess===false)} >Ok</button>
</div>
</div>
</div>
}


{ showPdf && <div className="pdf-viewer-container" style={{marginLeft:"18rem",marginTop:"-5rem"}}>
           <div className='pdf-view-elements'>
           <div className='file-name'>
            <h3>ECG Test</h3>
            <p>4/11/22</p>
           </div>

           <header className="Documents-section">
                  <Document file="Gayathri Resume (1)-1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                  <Page height="600" pageNumber={pageNumber}></Page>
                  </Document>
                 <img src="logo192.png" alt="" />
              </header>

           <div className="ending-part">
              <button>Dowload</button>
              <span> <i class="fas fa-times-circle" style={{marginTop:"0.3rem"}} onClick={()=>setPdf(showPdf===false)}></i></span>
           </div>
          
        
           </div>
           
          </div>
} 
</>
    )
}   



export default FileUpload;