import React from 'react'

export default function SlideText(props) {
  return (
    <div>
        <div className="slide-text fade">
          <h1>"</h1>
          <p>{props.p}</p>
          <h1>"</h1>
        </div>
    </div>
  )
}
