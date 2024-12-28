
import React from 'react'
import './SectionsCSS/middle.css';
import './InnerPages/Places.css'
import './InnerPages/BestTime.css'
import './InnerPages/Places.css'
import Button1 from './InnerPages/InnerPageComp/Button1';

export default function Middle() {

  return (
    
    <div className="seconds">
                
      <div className="left">
        <img src="loggo.png" alt="logo"/> <p>Sri Lanka, the 'Pearl of the Indian Ocean,</p>
        <header> SRI LANKA </header>
        <p> Endless beaches, timeless ruins, welcoming people, oodles of elephants, rolling surf, cheap prices, fun trains, famous tea and flavorful food make Sri Lanka irresistible.</p>  
      </div>

      <div className="right">
        <Button1 link="/BestTime" title="click here to see trvelling seasons" txt="📅 Best times to visit → "/>
        <Button1 link="/Places" title="click here to see more places" txt="📍 Best places to visit→"/>
        <div className="box">
          <h2>Leave the planning to a local expert</h2>
          <p>Experience the real Sri Lanka. Let a local expert handle the planning for you.</p>
          <Button1 link="/Game" title="get experts help to plan your journry" txt="Win free tickets from VISIT SriLanka to most attractive places in Sri Lanka → "/>
        </div>
      </div>
    </div>
    
  )
}
