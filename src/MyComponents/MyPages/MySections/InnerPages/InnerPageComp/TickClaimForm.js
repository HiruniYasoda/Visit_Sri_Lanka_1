import React from 'react'
import {useState} from 'react';
import './InnerComCss/ansform.css'


export default function TickClaimForm() {

    const [selectedPlace, setSelectedPlace] = useState("");

    const handlePlaceChange = (event) => {
        setSelectedPlace(event.target.value);
    }

  return (
    <div>
        <div class="answer">
        <p>Our local experts are trip planners, not on-the-ground guides. They will pour their heart and soul into 
       tailoring the perfect itinerary for you. You do not have to connect with any of them . 
       just fill the form below and submit it. We will connect with you through your email.</p>
        
        <form className="trip-form">
                <h2>Get your tickets</h2>
                <label>
                    Your Email:
                    <input type="email" name="email" required />
                </label>
                
                <label>
                    Number of tickets :
                    <input type="number" name="people" min="1" required />
                </label>
                <label>
                    Place you like to have free tickets :
                    <select value={selectedPlace} onChange={handlePlaceChange}>
                    <option value="Lotus tower"></option>
                    <option value="Peradeniya garden">Peradeniya garden</option>
                    <option value="Haggala">Haggala</option>
                    <option value="Water park">Water park</option>
                    <option value="Yala national park">Yala national park</option>
                    <option value="Sigiriya">Sigiriya</option>
                    <option value="Sinharaja">Sinharaja</option>
                    <option value="Dunhida water fall">Dunhida water fall</option>
                    <option value="Vilpaththuwa">Vilpaththuwa</option>
                    <option value="Udawalawa">Udawalawa</option>
                    <option value="Peogen island">Peogen island</option>
                    <option value="Edishon banglow">Edishon banglow</option>
                    <option value="Meusiun">Meusiun</option>
                    <option value="Kumana National park">Kumana National park</option>
                    <option value="Gurge National park">Gurge National park</option>
                    </select>
                   
                </label>
                
                <div class="get-claim">
                <button type="submit" 
                 onClick={() => alert("Great, we will send further information to your email")}
                 >Submit</button>
                 </div>
            </form>
            </div>
    </div>
  )
}
