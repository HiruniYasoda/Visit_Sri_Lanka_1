import React from 'react'
import './InnerComCss/Newscard.css'

export default function NewsCard(props) {
    const cardDirection = props.reverse ? 'row-reverse' : 'row';
    const paragraphs = props.p.split('\n\n'); 
  return (
    <div>
        <div id="Traditional-card" style={{ flexDirection: cardDirection }}>
            <div class="top-text">
            <h1 style={{ color: props.color1 }}>

                {props.topic}</h1>
                <h2 style={{ color: props.color2 }}>{props.subtopic}</h2>
                {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p> 
      ))}
               
                     <br></br><br></br>
                     <hr style={{ backgroundColor: props.color3 }}></hr>
            </div>
            <div class="TradIMg">
              
            <div class="imgdown">
                <img src={props.imgd} alt="image01"/>
                
            </div>
            <div class="imgup">
                <img src={props.imgu} alt="image02"/>
            </div>
            
            </div>
        </div>
    </div>
  )
}
