import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";



//importing local files
import HomeScreen from "./HomeScreen";
import ManAboveForm from '../assets/images/man-logo.png';
import SignUpScreen from "./SignUpScreen";
//importing stylesheets
import "./SignInScreen.css"
import axios from "axios";




function SignInScreen(){
      
   
  


    const [userData , setUserData] = useState({
        email:"",
        password:"",
   }) 
   

   // function to handle the change in input state
   const handlingChange=(e)=>{
      
       const {name , value} = e.target;
       console.log(name,value)
       setUserData({
           ...userData,
           [name]:value
       }
       )
   }



   //api call 
   const login =()=>{
    const {email , password} = userData;
    axios.post('http://localhost:9002/login')
    .then(res=>console.log(res))
   }


    return(        
        <div className="main-div">
                   
             <div className="form-container">
             <img className="man-above-form" src={ManAboveForm} />
                <div className="text-welcome">
                    <p className="text">Welcome back! <br/> Please Sign IN to Proceed </p>
                </div>
              <div className="form">  
              <label className="label">
                Email
              <input  className="input-field" type="email"  name='email'  value={userData.email} placeholder="Your Email" onChange={handlingChange}></input>
              </label>
             <label className="label">
                Password
             <input className="input-field" type="password" name='password' value={userData.password} placeholder="Password" onChange={handlingChange}></input>
              
             </label>
              <div className='log-button' onClick={login}> SIGN IN </div>
            </div>

            <div className="signup-text">
                or don't have a account ,  
                    
            </div>
            <div className="underlying-text"><Link  to="/signUP" className="click-here">click here</Link> to SIGN UP</div>
             </div>

        </div>
    )
}

export default SignInScreen;