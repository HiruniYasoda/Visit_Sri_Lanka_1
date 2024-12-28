import React from 'react'
import './InnerComCss/innerfoot.css'
export default function InnerFooter() {
  return (
    <div class="foot">
      <div class="footer-logo">
      <img src="loggo2.png" alt="Tourism Website Logo"/>
      <p>Your gateway to the wonders of Sri Lanka</p>
      </div>
     
      <div class="footer-contact">
      <h3>Contact Us</h3>
      <p>Address: 123 Tourism St, Colombo, Sri Lanka</p>
      <p>Phone: +94 123 456 789</p>
      <p>Email: info@visitsrilanka.com</p>
      </div>

      <div class="footer-newsletter">
      <h3>Newsletter</h3>
      <p>Subscribe for the latest travel tips and updates</p>
        <form action="#">
        <input type="email" placeholder="Your Email"/>
        <button type="submit">Subscribe</button>
         </form>
      </div>

    <div class="footer-legal">
      <p><a href="/privacy-policy">Privacy Policy</a> | <a href="/terms">Terms & Conditions</a> | <a href="/cookies">Cookies Policy</a></p>
    </div>
     
    </div>
  )
}
