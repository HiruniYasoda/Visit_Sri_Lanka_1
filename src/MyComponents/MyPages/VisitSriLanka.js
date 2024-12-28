
import React from 'react'
import './MyPagesCSS/visitsrilanka.css';
import NavigationBar from './MySections/NavigationBar';
import SriLankaIntro from './MySections/SriLankaIntro';
import Middle from './MySections/Middle';
import Slideshow from './MySections/SlideShow';
import FlipBox from './MySections/FlipBox';
import GuideArtivles from './MySections/GuideArtivles';
import NewsAndToDo from './MySections/NewsAndToDo';
import Activities from './MySections/Activities';
import FootSection from './MySections/FootSection';
import FandQ from './MySections/InnerPages/InnerPageComp/FandQ';
import {q1,q2,q3,a1,a2,a3} from './MySections/InnerPages/InnerPageComp/FandQpara'
import Header from './MySections/Header';

function VisitSriLanka() { 
  return (
    <div>
      <Header/>
      <NavigationBar />
      <SriLankaIntro />
      <Middle />
      <Slideshow />
      <FlipBox />
      <GuideArtivles />
      <NewsAndToDo />
      <Activities />
      <header>F&Q</header>
      <FandQ q={q1} ans={a1}/>
      <FandQ q={q2} ans={a2}/>
      <FandQ q={q3} ans={a3}/>
      <FootSection />
     

    </div>


  );
}
export default VisitSriLanka;



