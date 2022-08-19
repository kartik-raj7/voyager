import React,{useState,useEffect} from 'react'
 function Error404(){
    // useEffect(()  => {
    //     document.body.classList.add('bg-black');
    
    //     return () => {
    //         document.body.classList.remove('bg-black');
    //     };
    // });
    return(
        
        <div style={mystyle}>
            <h1>OOPS Couldnt find page lookingfor</h1>
            <h1>PAge not found</h1>
        </div>
    )
 }
 
 export default Error404;
 const mystyle = {
    color: "white",  
    backgroundColor: "DodgerBlue",
    padding: "10px",
    margintop:"100px",
    fontFamily: "Arial",
    width:"100%",
    height:"100%",
  };