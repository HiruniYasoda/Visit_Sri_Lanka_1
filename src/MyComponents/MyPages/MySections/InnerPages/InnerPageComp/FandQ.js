import React from 'react'
import './InnerComCss/fandq.css'

export default function FandQ(props) {
  return (
    <div>
    <div class="fandq">
     <div class="q">
       {props.q}
       <br></br>
      </div>
      <div class="ans">
        {props.ans}
      <br></br>
      </div>                     
    </div>
    </div>
  )
}
