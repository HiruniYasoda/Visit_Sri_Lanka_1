import React from 'react';
import { useState } from 'react';

export default function ContactForm() {
  //change subscribe to subscribed (1st button)
   const [subscribed, setSubscribed] = useState(false);
    const bttnClick = (event) => {
    event.preventDefault();
    setSubscribed(true);
   }
  
  const handleClick = () => { 
    const email = document.getElementById('email').value;
    //check email field is filled or not 
    if (email) { 
      alert(`Thank you, we will contact you via ${email}`);
      
    } else {
      alert('Please enter an email address.');
    }
     
    //clear text areas
    document.getElementById('email').value = '';
    document.getElementById('message').value = '';
  };

  return (
    <div>
      <div className="form-container">
      <form>
        first subscribe the page and send your ideas to us ! ! 
        <br></br>

        <div className="form-group">
    
        <input type="email" placeholder="Your Email" id="email"/>
        <br></br>
        <button type="submit" onClick={bttnClick}>
      {subscribed ? 'Subscribed' : 'Subscribe'}
    </button>
      
          </div>
          <div className="form-group">
            <label>Message:</label>
            <textarea id="message"></textarea>
          </div>
          <button type="button" onClick={handleClick}>
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
