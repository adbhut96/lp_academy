import React,{useState} from "react";
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';




import ManAboveForm from'../assets/images/man-logo.png'

import './SignUpScreen.css'


function SignUpScreen(){

    
   const navigate = useNavigate();  

    const [userData , setUserData] = useState({
        uname:"",
        email:"",
        password:"",
       
   }) 


 // function to handle the change in input state
 const handlingChange=(e)=>{
       
    const {name , value} = e.target;
    setUserData({
        ...userData,
        [name]:value
    }
    )
}

var isSubmit="";
//api call 
const register =()=>{

  const{uname,email,password} = userData

  if(uname &&email &&password){
    console.log("posted")
    axios.post('http://localhost:9002/register',userData)
    .then(res=>{
      alert(res.data.message);
      res.data.status?navigate('/signin') : navigate("/")
      
    })
    
  }else{
    alert("invalid") 
  }
}

return(
    <div className="main-div">
                 
              
             
    <div className="form-container">
    <img className="man-above-form" src={ManAboveForm} />
       <div className="text-welcome">
           <p className="text">Hey there! <br/> Create Your Account!</p>
       </div>
     <div className="form">  
     <label className="label">
       Name
     <input  className="input-field" type="text"  name='uname'  value={userData.uname} placeholder="Enter your name" onChange={handlingChange}></input>
     </label>
     <label className="label">
       Email
     <input  className="input-field" type="email"  name='email'  value={userData.email} placeholder="Your Email" onChange={handlingChange}></input>
     </label>
    <label className="label">
       Password
    <input className="input-field" type="password" name='password' value={userData.password} placeholder="Password" onChange={handlingChange}></input>
     
    </label>
    
     <div className='signup-button' onClick={register}> SIGN UP </div>
     
   </div>
   <p>{isSubmit}</p>  

    </div>

</div>
);
}

export default SignUpScreen;