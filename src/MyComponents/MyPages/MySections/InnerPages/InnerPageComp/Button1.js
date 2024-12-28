import React from 'react'
import { Link } from 'react-router-dom';

export default function Button1(props) {
  return (
    <div class="button1">
        <Link to={props.link} > 
        <button title={props.title}>{props.txt}</button>
        </Link>
    </div>
  )
}

