import './App.css';
import Navbar from './components/Navbar';
// import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import About from './components/pages/About';
import Contactus from './components/pages/Contactus';
import SignUp from './components/pages/Sign-Up';
import Error404 from './components/pages/Error404';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path = '/'></Route> */}
          <Route exact path='/' element={<Home/>} />
          <Route exact path='/home' element={<Home/>} />
          <Route exact path='*' element={<Error404/>}/>
          <Route path='/about' element={<About/>} />
          <Route path='/contact-us' element={<Contactus/>} />
          <Route path='/sign-up' element={<SignUp/>} />  
        </Routes>
      </Router>
      </>
    
  );
}

export default App;
