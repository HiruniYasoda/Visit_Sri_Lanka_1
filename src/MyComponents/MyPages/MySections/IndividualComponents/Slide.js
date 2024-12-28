import React from 'react'

export default function Slide(props) {
  return (
    <div>
        <div className="mySlides fade">
          <div className="numbertext">{props.number}</div>
          <img src={props.img} alt="Sri Lanka" />
        </div>
    </div>
  )
}
