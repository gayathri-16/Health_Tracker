import React,{useRef} from 'react';
import {Link} from 'react-router-dom';
import  '../CssFiles/signIn.css'
import  '../CssFiles/signup.css'
function SignIn() {
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
                    <h3>Sign in</h3>
                    <label>E-mail/Phone number</label>
                    <span><i class="fa-solid fa-phone"></i><i class="fas fa-at" style={{fontSize:'14px',marginLeft:'1.2rem',marginTop:'0.4rem', position:'absolute'}}></i><input id="user_detail" type="Email" name="email"  placeholder='E-mail address or Phone number' /></span> 
                    <p id='forgot_password' >Forgot Password?</p>
                    <Link to="/otpverify"> <button type="button" className='submit'> Next</button></Link>
                    <div className='footer' id="or_signup">
                    <p>or <br/>
                    <span><img src="https://companieslogo.com/img/orig/GOOG-0ed88f7c.png?t=1633218227" alt="google" /></span> Sign Up with Google <br/>
                     Don't have a Zoho account?<Link to="/" style={{textDecoration:'none'}}><b style={{color:'#3B7CB5'}}> Sign Up Now</b></Link></p>
                    </div>
                    </div>
                 </div>
               <div id='status_container'>
                    <div id='status' >
                    <img id="family_pic" src="https://img.freepik.com/free-vector/family-meeting-grandparents-country-house-excited-children-parents-visiting-grandmother-grandfather-boy-running-granny-vector-illustration-happy-family-love-parenting_74855-8358.jpg?w=2000" alt="gif" />
                    <div id='about_status'>
                    <h2>Healthy habbits</h2> 
                    <p>Healthy habits are learned<br/> in the same way as  <br/> unhealthy ones</p>
                    </div>
                 </div>
               </div>
              
         </form>
   
        </div>
    );
}

export default SignIn;