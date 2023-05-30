import React, { useEffect, useState } from 'react';
// import axios from 'axios'
import '../../CssFiles/create_profile.css'
import '../NavcssFiles/getinfo.css'

function CreateProfile() {

 const countries=[
    {id:"1", name:"India"},
    {id:"2", name:"USA"},
    {id:"3", name:"England"}
 ];
 const states=[
    {id:"1",countryId:"1",name:"TamilNadu"},
    {id:"2",countryId:"1",name:"Andhra Pradhesh"},
    {id:"3",countryId:"1",name:"Delhi"},
    {id:"4",countryId:"1",name:"Kerala"},
    {id:"5",countryId:"2",name:"California"},
    {id:"6",countryId:"2",name:"Texas"},
    {id:"7",countryId:"3",name:"BedFord"},
    {id:"8",countryId:"3",name:"Cambridge"},

 ]
 const cities=[
    {id:"1",stateId:"1",name:"Chennai"},
    {id:"2",stateId:"1",name:"Madhurai"},
    {id:"3",stateId:"2",name:"Hydrabad"},
    {id:"4",stateId:"2",name:"Nellore"},

    {id:"1",stateId:"3",name:""},
    {id:"2",stateId:"3",name:""},
    {id:"3",stateId:"4",name:"Kochi"},
    {id:"4",stateId:"4",name:"Thiruvendram"},

    {id:"1",stateId:"5",name:"Denver"},
    {id:"2",stateId:"5",name:"Houstan"},
    {id:"3",stateId:"6",name:"Austin"},
    {id:"4",stateId:"6",name:"Richmond"},

    {id:"1",stateId:"7",name:"London"},
    {id:"2",stateId:"7",name:"Liverpool"},
    {id:"3",stateId:"8",name:"Bristol"},
    {id:"4",stateId:"8",name:"Doncaster"}
 ]

 const [country,setCountry] = useState([]);
 const [state,setState] = useState([]);
 const [city,setCity] = useState([]);

 
useEffect(()=> {
    setCountry(countries);
},[])
const handleCountry = (id)=>{
   const dt = states.filter(x=>x.countryId === id);
   setState(dt);
} 
const handleState= (id)=>{
    const dt = cities.filter(x=>x.stateId === id);
    setCity(dt);
 } 
 

    return (
        <div className='profile_page'>


            <div className='create_profile' id='getinfo'>
          

            
            
               <div className='personal_info' id="person-details">
                <p>Personal information</p>
                    <div className='name_feild'>
                    <label>First Name</label> <label>Last Name</label> <br/>
                    <input type="text"  placeholder='Name'  className="details"/>  
                    <input type="text" placeholder='Last name' id="input" className="details"/>
                    </div>
                    <br/> <br/><br/>
                    <div className='contact_feild'>
                    <label>Phone Number</label> <label>Email ID</label><br/>
                    <input type="text" placeholder='Phone number'className="details"/>
                    <input type="text" placeholder='Email'  id="input"  className="details"/>
                    </div>
                </div>

                 <div className='health_info' id="info_health">
                   <div className='info_label'>
                   <label>Gender</label>
                   <label className='age'>Age</label>
                   <label className='height'>Height</label>
                   <label className='weight'>Weight</label>
                   <label className='bloodgroup'>BloodGroup</label>
                   </div>
               
                   <div className='info_values'> 
                   <select name="gender" className='gender' placeholder='select' >
                    <option disabled selected hidden>select</option>
                    <option value="female" key="">Male</option>
                    <option value="female" key="">Female</option>
                   </select>
                   <input type="text" className='health_data details' placeholder='ex 20'/>
                   <input type="text" className='health_data details'  placeholder='ex 120cm' />               
                   <input type="text" className='health_data details' placeholder='60kg'/>
                   <input type="text" className='health_data details' placeholder='ex B+'/>
                   </div>
                 </div>
               <div className='address_feild' id="add-box">
               <div className='add_location'>
               <p id="local">Location</p>
                {/*<p className='auto_fill'> File as per my address detail </p><span><input type="checkbox" id='add_check'/></span> <br/> */}
                </div> 
                <br/>
                <label className='add_label'>Address Line</label>
                <input type="text" placeholder='Address' id="enter_address" />
                </div>

                <div className='health_info' id="place_info">
                   <div className='place_label' id="region">
                   <label>Country/Region</label>
                   <label className='state'>State</label>
                   <label className='town'>Town/City</label>
                   <label className='pincode'>Pincode</label>
                  </div>
              

              <div className='places' id="cities">

                <select name="select" className='select_place' placeholder='select' onChange={(e)=> handleCountry(e.target.value)}>
                    <option disabled selected hidden >select</option>
                    {
                        country&&
                        country !== undefined ?
                        country.map((ctr,index)=>{
                            return(
                                <option key={index} value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        :"No Country"
                    }
                </select>
                <select name="select" className='select_place' onChange={(e)=> handleState(e.target.value)}>
                    <option disabled select hidden >select</option>
                    {
                        state&& 
                        state!==undefined?
                        state.map((ctr,index)=>{
                            return(
                                <option key={index} value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        :"No State"

                    }
                </select>
                <select name="select" className='select_place'>
                    <option disabled selected hidden >select </option>
                    {
                        city&& 
                        city!==undefined?
                        city.map((ctr,index)=>{
                            return(
                                <option key={index} value={ctr.id}>{ctr.name}</option>
                            )
                        })
                        :"No City"

                    }
                </select>
                <input name="select" className='select_place'/>
              </div>
            </div>
          
           
        

           </div>      
        </div>
    );
}

export default CreateProfile;