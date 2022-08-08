import './App.css';
import Navbar from './components/Navbar';
// import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
import Products from './components/pages/Products';
import Services from './components/pages/Services';
import SignUp from './components/pages/Sign-Up';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path = '/'></Route> */}
          <Route exact path='/' element={<Home/>} />
          <Route exact path='*' element={<Home/>}/>
          <Route path='/about' element={<Services/>} />
          <Route path='/contact-us' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} />  
        </Routes>
      </Router>
      </>
    
  );
}

export default App;
