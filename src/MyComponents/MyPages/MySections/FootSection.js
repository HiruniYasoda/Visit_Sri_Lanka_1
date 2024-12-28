import React from 'react'
import './SectionsCSS/footer.css';

export default function FootSection() {
  return (
    <div>
        
<footer>
  <div class="footer-container">
   
    <div class="footer-logo">
      <img src="loggo2.png" alt="Tourism Website Logo"/>
      <p>Your gateway to the wonders of Sri Lanka</p>
      <div class="social-media">
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i> 
        <img src="fblogo.png" alt="Fb"/> facebook</a>
        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-instagram"></i>
        <img src="iglogo.png" alt="IG"/> instergram</a>
        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i> 
        <img src="xlogo.png" alt="X"/> x twitter </a>
      </div>
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
</footer>

    </div>
  )
}
