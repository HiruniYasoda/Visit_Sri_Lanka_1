import React from 'react'

export default function Activity(props) {
  return (
    <div>
        <div className="Activity">
          
           <div className="Mini_image">
           <img src={props.image} alt="Mini Activity" />
           </div>

           <div className="small_des">
           <p>{props.p}</p>
           </div>

        </div>
    </div>
  )
}
