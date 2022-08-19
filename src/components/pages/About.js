import React from 'react';
import '../../App.css';


function About() {
  return (
    <div className='About' style={mystyle}>
    <h2>Address</h2>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3500.3912974910513!2d77.25890891501007!3d28.677939282399844!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfc5e54e6b163%3A0x523ae20fe007eccc!2sDr.%20Akhilesh%20Das%20Gupta%20Institute%20of%20Technology%20%26%20Management!5e0!3m2!1sen!2sin!4v1660940047122!5m2!1sen!2sin" width="600" height="450" frameborder="0" style={{border:0}} allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
    </div>
  )
}
export default About;
const mystyle = {
  color: "black",
  alignitems: 'center',
  // backgroundColor: ",
  padding: "10px",
  margintop:"100px",
  fontFamily: "Arial",
  width:"100%",
  height:"100%",
};