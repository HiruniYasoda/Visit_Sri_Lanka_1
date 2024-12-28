import React from 'react'
import './InnerComCss/ansform.css'
export default function AnsForm() {
  return (
    <div>
        <div class="answer1">
        <p>Our local experts are trip planners, not on-the-ground guides. They will pour their heart and soul into 
       tailoring the perfect itinerary for you. You do not have to connect with any of them . 
       just fill the form below and submit it. We will connect with you through your email.</p>
        
        <form className="trip-form">
                <h2>Plan Your Trip</h2>
                <label>
                    Start Date:
                    <input type="date" name="startDate" required />
                </label>
                <label>
                    End Date:
                    <input type="date" name="endDate" required />
                </label>
                <label>
                    Number of People:
                    <input type="number" name="people" min="0" max="2" required />
                </label>
                <label>
                    Your Ideas:
                    <textarea name="ideas" placeholder="Tell us about your ideas for the trip" />
                </label>
                <label>
                    Your Email:
                    <input type="email" name="email" required />
                </label>
                <button type="submit" className="get-started-btn">Submit</button>
            </form>
            </div>
    </div>
  )
}
