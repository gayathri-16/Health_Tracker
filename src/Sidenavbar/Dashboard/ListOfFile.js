import React from 'react';
import FileItem from './FileItem';
import axios from 'axios'

import '../NavcssFiles/FileList.css'

const ListOfFile = ({files, removeFile})=> {
     
    const deleteFileHandler = (_name)=>{
        axios.delete( `http://localhost:800/upload?name=${_name}`)
        .then((res)=> removeFile(_name))
        .catch((err)=> console.error(err))

        console.log('file has been deleted');
    }

    return (
        <div className='file-list-container'>
            
            <ul className='file-list' >
           
               <li id="list"> {   files &&
                  files.map(f => <FileItem
                    key = {f.name}
                    file = {f}
                    deleteFile = {deleteFileHandler}
             /> )}
               </li>
   
            </ul>
          
        </div>
    );
}

export default ListOfFile;
