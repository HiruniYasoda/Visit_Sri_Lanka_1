import React, { useState } from 'react';
import './SectionsCSS/gossip.css'; 
import NewsCard from './InnerPages/InnerPageComp/NewsCard';
import AnsForm from './InnerPages/InnerPageComp/AnsForm';
import Button1 from './InnerPages/InnerPageComp/Button1';


const FAQItem = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }
    

    return (
        <div className="faq-item">
            <div className="faq-question" onClick={toggleOpen}>
                <span>{question}</span>
                <span className="arrow">{isOpen ? '▲' : '▼'}</span>
            </div>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    );
};

const Gossip = () => {
    return (
        
        <div className="faq-section">
            <header>Let us plan your trip </header>
            <br></br>
<p>Welcome to your personalized travel plan guide! This guide is designed to help you shape the perfect itinerary, 
    with tailored recommendations to suit your travel style and interests. From scenic routes and comfortable accommodations 
    to must-visit attractions and exciting activities, we’ve curated each element to make your journey smooth and memorable.
     Let’s dive in and start planning a trip that will leave you with lasting memories and an unforgettable experience!</p>
            <img src="loggo.png" alt="logo"/>

            <NewsCard
                  subtopic="Your expert will be there for you throughout your trip, offering 24/7 support and concierge service. Whatever you need, your expert will take care of it." 
                  p="Confirm your trip by paying a deposit. Then your expert will lock in all your reservations."
                  imgu="Trip-planning.png" 
                  imgd="guid2.jpg"
                  />
<button className="get-started-btn">1. Connect with local expert</button>
<button className="get-started-btn">2. Craft your trip</button>
<button className="get-started-btn">3. Booking and take off</button>

            <h2>How it happens</h2>
            <div className="faq-list">
                <FAQItem 
                    question="Connect with local expert" 
                    answer={<AnsForm/>}
                />
                <FAQItem 
                    question="Craft your trip" 
                    answer="Our tour guides will send you all the detailed information via email once you've crafted 
                    your trip. You can request a complete overview, including a road map, suggested hotels, must-visit 
                    attractions, and recommended activities tailored to your preferences. This way, you’ll have a 
                    well-organized plan at your fingertips, making it easy to visualize and prepare for your adventure."
                    
                />
                <FAQItem 
                    question="Booking and take off" 
                    answer="We’re here to help with every step of the booking process, from reserving accommodations 
                    to securing spots for the activities you’ve selected. With our support, you can relax and focus on 
                    enjoying your journey, knowing that every detail has been taken care of."
                />
            </div>
            <div class="Places-con">
        <Button1 link="/VisitSriLanka" txt="Back "/>
        <br></br>
        </div>
        </div>
    );
};

export default Gossip;
