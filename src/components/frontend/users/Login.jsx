import React, {useState} from 'react';
import './Login.css';
import {Link} from "react-router-dom";
import welcomeimg from './loginFont.svg';
function Login(){

   const [emailval,setemailval]= useState("");
   const [passval,setpassval]= useState("");
    const handlesumbit=(event)=>{
        event.preventDefault();
    }
    return(
        
    <div className='main-login'>
         <div className='login-contain'>
            <div className="left-side"> 
                <div className="welcomeImg">
                <img src={welcomeimg} id="wel-img-id" alt="" srcset="" />
                </div>   
            </div>
            
            <div className="right-side">
                <div className="welcomeNote">
                    <h1>Get Started!</h1>
                </div>
                
                <form onSubmit={handlesumbit}>
                   <label for="emil1">User name</label>
                      <input placeholder="Enter your user name or email..." type="email"  value={emailval}
                      onChange={(e)=>{setemailval(e.target.value)}} id="emil1" />
                   <label for="epwd1">Password</label>   
                      <input placeholder="Enter your password" type="password"  value={passval}
                      onChange={(e)=>{setpassval(e.target.value)}} id="pwd1" />
                   <div className="footer">
                     <h6>  <Link className='link' to='/Register'>Forgot your password? </Link></h6>
                   </div>
                   <button type="submit" id="sub_butt"> Login</button>  
                </form>    
            </div>
        </div>
    </div>
    )
}
export default Login;