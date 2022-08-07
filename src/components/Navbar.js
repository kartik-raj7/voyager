import { Button } from './Button';
import React,{useState,useEffect} from 'react'
import {Link} from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click,setClick] = useState(false);
    const [button,setButton] = useState(true);
    const closemobilemenu =()=> setClick(false);

    const showbutton =()=>{
      if(window.innerWidth<=960){
        setButton(false);
      }
      else{
        setButton(true);
      }
    };
    useEffect(()=>{
    showbutton();
  },[]);
    window.addEventListener('resize',showbutton);
  return (
   <>
   <nav className='navbar'>
    <div className='navbar-container'>
    <Link to='/' className='navbar-logo' onClick={closemobilemenu}>
        VOYAGER
        {/* <i className="fab fa-typo3"/> */}
        <i class="fas fa-hiking"></i>
    </Link>
    <div className='menu-icon' onClick={()=>setClick(!click)}>
     <i className={click ? 'fas fa-times':'fas fa-bars'}/>
    </div>
    <ul className={click ? 'nav-menu active':'nav-menu'}>
       <li className='nav-item'>
         <Link to='/home' className='nav-links' onClick={closemobilemenu}>
          HOME
         </Link>
       </li>
       <li className='nav-item'>
         <Link to='/about' className='nav-links' onClick={closemobilemenu}>
          ABOUT
         </Link>
       </li>
       <li className='nav-item'>
         <Link to='/contact-us' className='nav-links' onClick={closemobilemenu}>
          CONTACT US
         </Link>
       </li>
       <li className='nav-item'>
         <Link to='/sign-up' className='nav-links-mobile' onClick={closemobilemenu}>
          SIGN UP
         </Link>
       </li>
    </ul>
    {button && <Button buttonStyle='btn--outline'>SIGNUP</Button>}
    </div>
   </nav>
   </>
  )
}

export default Navbar;