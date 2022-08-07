import './App.css';
import Navbar from './components/Navbar';
// import { Routes ,Route } from 'react-router-dom';
import {BrowserRouter as Router ,Routes,Route} from 'react-router-dom'
import Home from './components/pages/Home';
function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          {/* <Route exact path = '/'></Route> */}
          <Route exact path='/' element={<Home/>} />
          {/* <Route path='/services' element={<Services/>} />
          <Route path='/products' element={<Products/>} />
          <Route path='/sign-up' element={<SignUp/>} /> */} 
        </Routes>
      </Router>
      </>
    
  );
}

export default App;
