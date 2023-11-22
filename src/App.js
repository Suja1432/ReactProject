
import { Link, Route, Routes } from 'react-router-dom';
import './App.css';
import LoginSignUp from './component/LoginSignUp';

import NavBar from './component/NavBar'
import About from './component/About';
import Footer from './component/Footer';

import MainContent from './component/Main/MainContent';
import HomeFile from './component/HomeFile'
import MainDetails from './component/Main/MainDetails';
import FrontPage from './component/Main/FrontPage';


function App() {
  
  return (
    <div className="App"> 
    <Routes>
   <Route path='/' element={<HomeFile />}></Route>
   <Route path='/Login' element={<LoginSignUp />}></Route>
   <Route path='/ABOUT' Component={About}></Route>
   <Route path='/REVIEWS' element={<MainContent />}></Route>
   {/* <Route path='/Home' element={< />}></Route> */}
   <Route path='/maindetails' element={<MainDetails />}></Route>
   </Routes> 
   {/* <HomeFile /> */}
 
   <Footer /> 
    </div>
  );
}

export default App;
