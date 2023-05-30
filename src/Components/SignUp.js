import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import  '../CssFiles/signup.css'
function SignUp() {
    const name=useRef();
    const email= useRef();
    const password= useRef();

    const handleSubmit=()=>{
        localStorage.setItem("name",name.current.value)
        localStorage.setItem("email",email.current.value)
        localStorage.setItem("password",password.current.value)
        
    }
    return (
        <div className='signup_form'>
            <form onSubmit={handleSubmit}>
                <div className='login_container'>
                    <div className='sign_up'>
                    <img className='logo' src="https://www.transparentpng.com/thumb/heart/picture-heart-outline-png-30.png" alt="logo"/><span> <h2>Health Tracker</h2></span>
                    <h3>Sign Up</h3>
                    <label>Name</label>
                    <span><i class="fa-regular fa-user"></i> <input type="text" id="user_detail" name="name" placeholder='Name' /></span>
                    <label>E-mail/Phone number</label>
                    <span><i class="fa-solid fa-phone"></i><i class="fas fa-at" style={{fontSize:'14px',marginLeft:'1.2rem',marginTop:'0.4rem', position:'absolute'}}></i><input id="user_detail" type="Email" name="email"  placeholder='E-mail address or Phone number' /></span> 
                    <label>Password</label>
                    <span><i class="fa-solid fa-key"></i><i class="fa-regular fa-eye" style={{fontSize:'14px',marginTop:'1rem',marginLeft:'22rem'}}></i><input type="password" id="user_detail" name="password"  placeholder='Password'/></span>
                    <Link to="/setprofile"> <button type="button" className='submit'> Sign up</button></Link>
                    <div className='footer' id="or_login">
                    <p>or <br/>
                    <span><img src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" alt="google" /></span> Sign Up with Google <br/>
                    Already have an account?<Link to="/signin" style={{textDecoration:'none'}}><b style={{color:'#3B7CB5'}}> Log In</b></Link></p>
                    </div>
                    </div>
                 </div>
               <div id='status_container'>
                    <div id='status' >
                    <img id="family_pic" src="https://img.freepik.com/free-vector/big-family-meeting_74855-5220.jpg?w=2000" alt="gif" />
                    <div id='about_status'>
                    <h2>Family health status</h2> 
                    <p>Happy healthy parents <br/> make happy healthy children, keep on tracking <br/> your loved one health with Health Tracker</p>
                    </div>
                 </div>
               </div>
              
         </form>
   
        </div>
    );
}

export default SignUp;