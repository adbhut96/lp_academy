import { BrowserRouter,Routes,Route } from 'react-router-dom';

import SignInScreen from './screens/SignInScreen';

import './App.css';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';
import { useState } from 'react';

function App() {

   const [user , setLoginUserData] = useState({})


  return (
    <BrowserRouter>
     <Routes>
      <Route  exact path='/' element=  {
         user && user._id?<HomeScreen/>:<SignInScreen setLoginUserData={setLoginUserData} />
        }>
      
      </Route>
      <Route  path='/signUp' element={<SignUpScreen/>}/>
      <Route  path='/signIn' element ={<SignInScreen setLoginUserData={setLoginUserData}/>} >
         

        </Route>  

     </Routes>
    </BrowserRouter>
  );
}

export default App;
