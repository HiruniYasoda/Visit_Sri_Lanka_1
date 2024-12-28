import React from 'react'
import{p1, p2,p3,p4,p5,p6,p7,p8,p9,p10} from './InnerPageComp/BestTimePara';
import TimeSection from './InnerPageComp/TimeSection'
import InnerFooter from './InnerPageComp/InnerFooter';
import Button1 from './InnerPageComp/Button1';
import FloatingButtons from './FloatingBtn';
import {q8,q9,q10,a8,a9,a10} from './InnerPageComp/FandQpara'
import FandQ from './InnerPageComp/FandQ';

export default function BestTime() {
  return (
    <div class="BestTiimeAll">

      <FloatingButtons img="sri-lankas-instagram-hotspots.jpg"
        l1="Explore Mountains" l2="Relax at Beaches" l3="Visit Towers/Castles" l4="Discover Natural Beauty" l5="Religious places"
        l1h="#Mountains" l2h="#beaches" l3h="#towers" l4h="#beauty" l5h="#religiousPlace" bc="rgba(245, 245, 220, 0)"
        h="Cheers To The Great Times That Make Travell Worth Enjoying!" p={p10}/>
      
      <div class="Besttimen"> 
        <header>When is the best time to visit Sri Lanka?</header>
        <br></br>
        <img src="visit.jpg" alt="visit" style={{width:"95%", height:"10%"}}/>

        <TimeSection  id="Mountains"
                      topic="September to October and April are the best times for hiking and mountain climbing"
                      p={p1}  
                      image="pidurangala.jpg"/>
        <TimeSection  topic="December to March is the best time to hit the beach" 
                      id="beaches"
                      p={p2}
                      image="marbal beach.jpg"/>
        <TimeSection  id="towers"
                      topic="September to October and April are the best times for exploring the whole country" 
                      p={p3}
                      image="polonnaruwa.jpg"/>
        <TimeSection  topic="April to September: The Dry Season in the Central and Northern Regions" 
                      id="beauty"
                      p={p4}
                      image="jaffna.jpg"/>
        <TimeSection  topic="December to March: The Sunny Beaches and Wildlife in the South and West" 
                      p={p5}
                      image="25.jpg"/>
        <TimeSection  topic="The Shoulder Seasons for Nature Enthusiasts" 
                      p={p6}
                      image="nature.jpg"/>
        <TimeSection  topic="May to August: Off-Season Exploration of the East Coast" 
                      p={p7}
                      image="70.jpg"/>
        <TimeSection  topic="October and November: Nature’s Wild Side During the Monsoons" 
                      p={p8}
                      image="Sinharaja_Rain_Forest.jpg"/>
        <TimeSection  topic="May to August is the best time to visit religious places" 
                      id="religiousPlace"
                      p={p9}
                      image="religious.jpg"
                      />   

        <br></br><br></br>
        <hr></hr>
        </div>

       <div class="faqsection">
        <header>F&Q</header>
        <FandQ q={q8} ans={a8}/>
        <FandQ q={q9} ans={a9}/>
        <FandQ q={q10} ans={a10}/>
      </div>

      <div class="Places-con">
        <Button1 link="/VisitSriLanka" txt="Back "/>
      </div>
      
    <InnerFooter/>
    </div>
  )
}

