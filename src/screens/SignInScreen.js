import React, {useState} from "react";
 




//importing local files
import HomeScreen from "./HomeScreen";
import ManAboveForm from '../assets/images/man-logo.png';
//importing stylesheets
import "./SignInScreen.css"




function SignInScreen(){
 
    const [user , setUser] = useState({
        email:"",
        password:"",
   }) 
   

   // function to handle the change in input state
   const handlingChange=(e)=>{
       
       const {name , value} = e.target;
       console.log(name,value)
       setUser({
           ...user,
           [name]:value
       }
       )
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
              <input  className="input-field" type="email"  name='email'  value={user.email} placeholder="Your Email" onChange={handlingChange}></input>
              </label>
             <label className="label">
                Password
             <input className="input-field" type="password" name='password' value={user.password} placeholder="Password" onChange={handlingChange}></input>
              
             </label>
              <div className='log-button'> SIGN IN </div>
            </div>

            <div className="signup-text">
                or don't have a account ,  
                    
            </div>
            <div className="underlying-text"><span className="click-here">click here</span> to SIGN UP</div>
             </div>

        </div>
    )
}

export default SignInScreen;