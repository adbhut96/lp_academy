import React, {useState} from "react";


import "./SignInScreen.css"




function SignInScreen(){
 
    //states to handle 
    const [errorMessages , setErrorMessages] = useState({});
    const [isSubmitted , setIsSubmitted]  = useState({});
    

     //errors which we will get
     const errors= {
        email : "invalid email address",
        pass : "invalid password", 
     }


    //error message is persist 
    const renderErrorMessage =(name) => 
    name ===errorMessages.name &&(
      <div className="error">{errorMessages.message}</div>
    );


    return(
        <div className="main-div">
             
             <div className="form-container">
                <form>
                    <div className="input-container">
                        
                    </div>
                    </form>     
             </div>

        </div>
    )
}

export default SignInScreen;