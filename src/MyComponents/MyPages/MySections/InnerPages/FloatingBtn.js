import React from 'react';
import './InnerPageComp/InnerComCss/floatingbtn.css' 


export default function FloatingButtons(props) {

    return (
        <div class="btn-text-con" 
        style={{ backgroundImage: `url(${props.img})` }}>

        <div class="floating-buttons-container">
            <p className="animated-text" style={{color: props.color }}>{props.h}</p>
            <a href={props.l1h} className="floating-button">{props.l1}</a>
            <a href={props.l2h} className="floating-button">{props.l2}</a>
            <a href={props.l3h} className="floating-button">{props.l3}</a>
            <a href={props.l4h} className="floating-button">{props.l4}</a>
            <a href={props.l5h} className="floating-button">{props.l5}</a>
            <a href={props.l6h} className="floating-button" style={{backgroundColor:props.bc}}>{props.l6}</a>  
        </div>

        <div class="intro-paragraph">
             <p>{props.p}</p>
        </div>
        
        </div>
    );
};


