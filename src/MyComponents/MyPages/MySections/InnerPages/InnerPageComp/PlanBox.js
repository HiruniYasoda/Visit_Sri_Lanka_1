import React from 'react'
import { Link } from 'react-router-dom';
import './InnerComCss/planbox.css'
export default function (props) {
  
  ;
  return (
    <div class="planobox">
        <h1>{props.h}</h1>
        <br></br><br></br>
        <Link to={props.link}> 
        <button onClick={props.on} >{props.btn}</button>
        </Link>
    </div>
  )
}
