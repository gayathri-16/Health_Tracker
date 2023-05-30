import React from 'react';
import { Routes,Route } from 'react-router-dom';
import SignUp from './Components/SignUp';
import SignIn from './Components/SignIn';
import SetProfile from './Components/SetProfile';
import OtpVerify from './Components/OtpVerify';
import Navbar from './Sidenavbar/Navbar';
import DashBoard from'./Sidenavbar/Dashboard/DashBoard';
import BasicInfo from'./Sidenavbar/Dashboard/BasicInfo';
import AddmedicalHistory from'./Sidenavbar/Dashboard/AddmedicalHistory';
import AddMedicalReport from './Sidenavbar/Dashboard/AddMedicalReport';
import PdfViewer from  './Sidenavbar/Dashboard/PdfViewer';
import DoctorVisitImage from './Sidenavbar/DoctorVisit/DoctorVisitImage'
import AddDoctor from './Sidenavbar/DoctorVisit/AddDoctor';
import DoctorVisitManagement from './Sidenavbar/DoctorVisit/DoctorVisitManagement';
import BookAppoinment from './Sidenavbar/DoctorVisit/BookAppoinment';
import RateUs from './Components/RateUs';
import ThankYou from './Components/ThankYou';

function App() {
  return (
        <Routes> 
           <Route path="/" element={<SignUp/>}/>
          <Route path='/setprofile' element={<SetProfile/>}/>
           <Route path='/signin' element={<SignIn/>}/>
           <Route path='/otpverify' element={<OtpVerify/>}/>
           <Route path="/rateus" element={<RateUs/>}></Route>
          <Route path='/thankyou' element={<ThankYou/>}/> 
       
   
        <Route path='/navbar' element={<Navbar/>}/>
        <Route path='/dashboard' element={<DashBoard/>}/>
        <Route path='/basicinfo' element={<BasicInfo/>}/>
        <Route path='/addmedicalhistory' element={<AddmedicalHistory/>}/>
        <Route path='/addmedicalreport' element={<AddMedicalReport/>}/>
        <Route path='/pdfviewer' element={<PdfViewer/>}/>
        <Route path='/doctorvisit' element={<DoctorVisitImage/>}/>
        <Route path='/add doctor' element={<AddDoctor/>}/>
         <Route path='/doctorvisitmanagement' element={<DoctorVisitManagement/>}/>
         <Route path='/bookappoinment' element={<BookAppoinment/>}/>
         </Routes>
    
        
  );
}



export default App;
