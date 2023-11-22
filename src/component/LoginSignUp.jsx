import React,{useRef, useState} from 'react'
import '../assert/LoginSignUp.css'
import { Link } from 'react-router-dom';

const LoginSignUp = () => { 
    const [action,setAction]=useState("Login");
    const nameref=useRef();

  return (
<div className='head' >
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
            <div className="underline"></div>
        </div>
        <div className="inputs">   
            {action==="Login"?<div></div>:<div className="input"><input type="text" placeHolder=" Name" />
        </div> }
            <div className="input">
                <input type="email" placeHolder=" Email Id" ref={nameref} />
            </div>
            <div className="input">
                <input type="password" placeHolder=" Password"/>
            </div>
        </div>
        {action==="Sign Up"?<div></div>:<div className="forgot-password">Lost Password?<span>Click Here!</span></div>}
        <div >
            <Link to='/' >
            <button 
            className='submit click'>Submit</button>
            </Link>
        </div>
      

        <div className="submit-container">
            <div className={action==="Login"?"submit gray":"submit"}onClick={()=>{setAction("Sign Up")}}>Sign Up</div>
            <div className={action==="Sign Up"?"submit gray":"submit"}onClick={()=>{setAction("Login")}}>Login</div>
        </div>
        </div>
 </div>
  )
}

export default LoginSignUp