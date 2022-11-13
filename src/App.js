import { BrowserRouter,Routes,Route } from 'react-router-dom';

import SignInScreen from './screens/SignInScreen';

import './App.css';
import SignUpScreen from './screens/SignUpScreen';
import HomeScreen from './screens/HomeScreen';

function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/'  element={<SignInScreen />}/>
      <Route path='signUp' element={<SignUpScreen/>}/>
      <Route path='home' element={<HomeScreen/>}/>  

     </Routes>
    </BrowserRouter>
  );
}

export default App;
