import React, { useState } from 'react';
import './Room.css'

function Room(){

    let [isLit, setLit] = useState(false);
    let [inc,setTemp] = useState(22);
    function updatelit(){
      console.log("Button Clicked");
      setLit(!isLit);
    }
    return(
      <div className={`room  ${isLit ? "lit" : "dark"}`}> 
        This room is {isLit ? "On" : "Off"}
        <br/>
        <button onClick={updatelit}>Toggle</button>
        <br/>
        {<button onClick={()=>{
          setLit(true);
        }
        }>On</button> }
        <br/>
        <button onClick={()=>{{setLit(false)}}}>Off</button>
        <br/>
        The Room Temperature : {inc}
        <br/>
        <button onClick={()=>{setTemp(++inc)}}>+</button>&nbsp;<button onClick={()=>{setTemp(--inc)}}></button>
        
       </div>
    );
}

export default Room;