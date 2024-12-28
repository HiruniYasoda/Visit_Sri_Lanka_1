import React, { useState, useEffect } from 'react';
import './SectionsCSS/slideshow.css';
import Slide from './IndividualComponents/Slide';
import { p1, p2, p3, p4, p5, p6, p7, p8 } from './IndividualComponents/ComponentsPara/Slideshowpara';
import SlideText from './IndividualComponents/SlideText';

export default function Slideshow() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    const showSlides = (n) => {
      const slides = document.getElementsByClassName('mySlides');
      const texts = document.getElementsByClassName('slide-text');
      const dots = document.getElementsByClassName('dot');

      if (n > slides.length) setSlideIndex(1);
      if (n < 1) setSlideIndex(slides.length);

      // Hide all slides and texts
      for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
        texts[i].style.display = 'none';
      }

      // Remove active class from all dots
      for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(' active', '');
      }

      // Show the current slide and text
      if (slides[slideIndex - 1] && texts[slideIndex - 1] && dots[slideIndex - 1]) {
        slides[slideIndex - 1].style.display = 'block';
        texts[slideIndex - 1].style.display = 'block';
        dots[slideIndex - 1].className += ' active';
      }
    };

    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    setSlideIndex((prev) => (prev + n > 8 ? 1 : prev + n < 1 ? 8 : prev + n));
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
  };

  return (
    <div>
      <section>
        <div className="slideshow-container">
          <div className="content-container">
            <div className="images">
              <Slide number="1/8" img="SriLanka(1).png"/>
              <Slide number="2/8" img="SriLanka(2).png"/>
              <Slide number="3/8" img="SriLanka(3).png"/>
              <Slide number="4/8" img="Sri Lanka (6).png"/>
              <Slide number="5/8" img="Sri Lanka.png"/>
              <Slide number="6/8" img="Sri Lanka (7).png"/>
              <Slide number="7/8" img="Sri Lanka (5).png"/>
              <Slide number="8/8" img="Sri Lanka (4).png"/>
            </div>
            <button className="prev" onClick={() => plusSlides(-1)}>&#10094;</button>
            <div className="text-container">
              <SlideText p={p1}/>
              <SlideText p={p2}/>
              <SlideText p={p3}/>
              <SlideText p={p4}/>
              <SlideText p={p5}/>
              <SlideText p={p6}/>
              <SlideText p={p7}/>
              <SlideText p={p8}/>
            </div>
            <button className="next" onClick={() => plusSlides(1)}>&#10095;</button>
          </div>

          
          

          <div style={{ textAlign: 'center' }}>
            <br/>
            <span className="dot" onClick={() => currentSlide(1)}></span>
            <span className="dot" onClick={() => currentSlide(2)}></span>
            <span className="dot" onClick={() => currentSlide(3)}></span>
            <span className="dot" onClick={() => currentSlide(4)}></span>
            <span className="dot" onClick={() => currentSlide(5)}></span>
            <span className="dot" onClick={() => currentSlide(6)}></span>
            <span className="dot" onClick={() => currentSlide(7)}></span>
            <span className="dot" onClick={() => currentSlide(8)}></span>
          </div>
        </div>
      </section>
      <br/><br/><br/>
      <hr width="80%"/><br/><br/><br/><br/><br/>
    </div>
  );
}
