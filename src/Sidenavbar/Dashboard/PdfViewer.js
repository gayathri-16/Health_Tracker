import { useState } from 'react'
import React from 'react'
// import FileItem from './FileItem'
import {Document,Page} from 'react-pdf/dist/esm/entry.webpack';


function PdfViewer() {
  const [numPage, setNumPages] = useState(null);
  const[pageNumber,setPageNumber] = useState(1);
  
  function onDocumentLoadSuccess({numPages}){
      setNumPages(numPage);
      setPageNumber(1);
      console.log(onDocumentLoadSuccess);
   }
  
      return (
          <>
          <div>
              <header>
                  <Document file="../../..//public./Gayathri Resume (1)-1.pdf" onLoadSuccess={onDocumentLoadSuccess}>
                  <Page height="600" pageNumber={pageNumber}></Page>

                  </Document>
                  <img src="logo192.png" alt="" />
              </header>
          </div>
      
          </>
      )
  }
export default  PdfViewer;
