import React, { useState, useEffect } from 'react';
import './SectionsCSS/activity.css';
import Activity from './IndividualComponents/Activity';
import { p1, p2, p3, p4, p5, p6, p7, p8, p9, p10, p11, p12, p13, p14, p15 } from './IndividualComponents/ComponentsPara/ActP';

export default function Activities() {
  const [slideIndex, setSlideIndex] = useState(1); 

  useEffect(() => {
    const slides = document.getElementsByClassName('Activities');
    console.log(slides);
    if (slides.length) {
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
      }
      if (slides[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
      }
    }
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prev) => {
      const totalSlides = document.getElementsByClassName('Activities').length;
      return prev + n > totalSlides ? 1 : prev + n < 1 ? totalSlides : prev + n;
    });
  };

  return (
    <div id="Pop_Acts">
      <div className="act">
        <header>
          Popular Activities<br />
          <h1>Experience popular activities in Sri Lanka</h1>
        </header> 
        <div className="Images_Activities">
          <div className="ActImage"> 
            <img src="llotustower.jpeg" alt="Main Activity" /> 
          </div>
          <button className="pre" onClick={() => plusSlides(-1)}>&#10094;</button>

          
          <div className="All_activities">
          
          
            <div className="Activity_slide">
              <div className="Activities fade">
                <Activity image="25.jpg" p={p1} />
                <Activity image="caption.jpg" p={p2} />
                <Activity image="puppets.jpeg" p={p3} />
                <Activity image="Kandyan-Cultural-Show-header.jpg" p={p4} />  
                <Activity image="pinnawala.jpg" p={p7} />                
              </div>
              <div className="Activities fade">
                <Activity image="istockphoto-508385764-612x612.jpg" p={p5} />
                <Activity image="Hot-Air-Ballooning-Sri-Lanka.jpg" p={p6} />
                <Activity image="pinnawala.jpg" p={p7} />
                <Activity image="watersports.jpg" p={p8} />  
                <Activity image="pinnawala.jpg" p={p7} />
              </div>
              <div className="Activities fade">
                <Activity image="Stree-Food.jpg" p={p9} />
                <Activity image="1561463846_shutterstock_1362737555_(1).avif" p={p10} />
                <Activity image="surfing.jpg" p={p11} />
                <Activity image="IMG_3614.jpg" p={p12} />  
                <Activity image="pinnawala.jpg" p={p7} />
              </div>
              <div className="Activities fade">
                <Activity image="03.jpg" p={p13} />
                <Activity image="slider1.jpg" p={p14} />
                <Activity image="loopriding.jpg" p={p15} />
                <Activity image="Sri-Lanka-Bike-tours.jpg" p={p15} /> 
                <Activity image="pinnawala.jpg" p={p7} />
              </div>
            </div>
            

          </div>         
          <button className="nex" onClick={() => plusSlides(1)}>&#10095;</button>
        </div>
      </div>
    </div>
  );
}
