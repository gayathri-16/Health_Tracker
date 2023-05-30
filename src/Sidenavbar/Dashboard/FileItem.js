import React,{useState} from 'react';
import '../NavcssFiles/fileitem.css'
import {Document,Page} from 'react-pdf/dist/esm/entry.webpack';


const FileItem=({file,deleteFile})=> {
  const [numPage, setNumPages] = useState(null);
  const[pageNumber,setPageNumber] = useState(1);
  function onDocumentLoadSuccess({numPages}){
    setNumPages(numPage);
    setPageNumber(1);
    console.log(onDocumentLoadSuccess);
 }

    const [popup, setPopup] = useState(false);
    const [setpdf, setShowPdf] = useState(false);
    const togglePopup = ()=>{
        setPopup(!popup)
    }


    return (
    <>
      <div id="file-item">
        <ul>
         <li className='list-item' key={file.name}>
           <div className='add_photo'>
            <div id='rectangle_box'>
                <div className='modify-buttons'>
                <button id="view-btn"  onClick={()=>setShowPdf(!setpdf)}> <i class="fa-solid fa-eye"></i></button>
                <button id="delete-btn" onClick={()=>setPopup(!popup)}><i class="fa-solid fa-trash"></i></button>
                </div>
               <button id="add-btn"><i class="fa-solid fa-file-pdf" id="file"></i> </button>  
            </div>  
            <p className='text' >{file.name}</p>           
           </div>
          </li>
         </ul>              
      </div>
    { popup &&  (
        <div className='popup_container' id="delete_container">
          <div className='add_report'>
               <div className='add-report-title'>
                  <h2>Delete Report</h2>
                  <p><i class="fas fa-times-circle" style={{marginLeft:"-1.8rem",marginTop:"-0.6rem"}} onClick={togglePopup}></i></p>
              </div>
               
                 <h4 id="delete-content">Are you sure you want delete  <br/> the report permently.</h4>
            

                <div  id="deletebtns">
                <button id="save" onClick={togglePopup}> 
                <input type="button" value={'Delete'} style={{opacity:1,color:'white', border:"none", background:"transparent", width:'90px', zIndex:100,}} onClick={()=>deleteFile(file.name)}/>
                </button>
                <button className='next' id="cancle" onClick={togglePopup}>Cancle</button>
                </div>
          </div>
      </div>   
    )}   

{ setpdf && <div className="pdf-viewer-container">
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
              <span> <i class="fas fa-times-circle" style={{marginLeft:"0.6rem",marginTop:"0.2rem"}} onClick={()=>setShowPdf(setpdf===false)}></i></span>
           </div>
          
        
           </div>
           
          </div>
} 
   </>
    );
}

export default FileItem;