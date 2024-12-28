import React from 'react';
import './InnerComCss/PlaceCrd.css';
import './PlaceImgCard';
import './../game.css';
import { Link } from 'react-router-dom';

export default function PlaceCard(props) {
  return (
    
    
     
<div class="two" style={{ width: "30%",height: "38rem"}}>
      <div className="card" style={{ width: "99%",height: "37rem"}}>
        <img src={props.image} alt="Card"/>
        <div className="card-content">
          <h3> {props.topic}</h3>
          <p>
          {props.p}
          
          <br></br>
            <Link to="/Game">{props.win}</Link>
            </p>
        </div>
      </div>
      <br/>
    </div>
    
  );
}
