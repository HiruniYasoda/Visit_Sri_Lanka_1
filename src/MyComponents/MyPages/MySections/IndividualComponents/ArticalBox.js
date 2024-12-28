import React from 'react'
import { Link } from 'react-router-dom';

export default function ArticalBox(props) {
  return (
    <div>
      
     <div class="content">
        <img src={props.img} alt="articles"/>
        <h1>{props.h}</h1>
        <p>{props.p}</p>
        <Link to="/Aricles" className="custom-link">Read article →</Link>
     </div>   

    </div>
  )
}
