import React from 'react'
import './InnerComCss/PlaceImgCard.css'

export default function PlaceImgCard(props) {
  return (
    <div class="one">
        <div className="Box">
        <div className="TravelImg">
          <img src={props.image} alt="Sigiriya"/>
          ..............................
        </div>
      </div>
    </div>
  )
}
