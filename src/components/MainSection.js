import React from 'react'
import '../App.css'
import './MainSection.css'
import { Button } from './Button'
function MainSection() {
  return (
    <div className='main-container'>
    <video src ='videos\home.mp4' autoPlay loop muted></video> 
    <h1>Planning your Dream Travel</h1>
    <p>Taking You Closer to your Holiday Destination</p>
    <div className='main-btns'>
        <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large'>
            GET STARTED
            </Button>
        <Button className='btns' buttonStyle='btn--primary' buttonSize='btn--large'>
            SIGN-UP
            </Button>
            </div>   
    </div>
  )
}

export default MainSection;