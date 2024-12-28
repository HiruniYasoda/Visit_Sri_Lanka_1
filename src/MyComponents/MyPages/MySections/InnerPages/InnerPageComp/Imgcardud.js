import React from 'react';
import './InnerComCss/PlaceCrd.css';
import { Link } from 'react-router-dom';

export default function ImageCar2(props) {
  return (
    <div className="three" style={{ width: "100%", height: "24rem" }}>
      <div className="card" style={{ width: "100%", height: "24rem" }}>
        <img src={props.image} alt="Card" />
        <div className="card-content">
          <h3>{props.topic}</h3>
          <p>{props.p}</p>
          <Link to="/Game" className="button">
            {props.win}
          </Link>
        </div>
      </div>
      
    </div>
  );
}
