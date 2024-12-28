import React from 'react'

export default function FlipBoxComp(props) {
  return (
 <div className="flip-box" style={{ backgroundImage: `url(${props.image})` }}>
    <div class="flip-box-inner">
       <div class="flip-box-front">
       <img src={props.image} alt="Paris"/>
          <div class="text"> {props.top}</div>
       </div>
       <div class="flip-box-back">
         <h2>{props.top}</h2>
         <p>{props.p} </p>
        </div>
           <hr/>  
    </div>
 </div>
  )
}
