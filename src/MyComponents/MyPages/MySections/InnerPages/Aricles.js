import React from 'react'
import FloatingButtons from './FloatingBtn'
import TimeSection from './InnerPageComp/TimeSection'
import { p1,p2,p3,p4,p5,p6,p7 } from './InnerPageComp/ArticlePara'
import InnerFooter from './InnerPageComp/InnerFooter'
import Button1 from './InnerPageComp/Button1'
import './Places.css'
import PlanBox from './InnerPageComp/PlanBox'


export default function Aricles() {
    const openPDF = () => {
        window.open(`${process.env.PUBLIC_URL}/TourGuid.pdf`, '_blank');
    }
  
  return (

    <div class="Artical_All">
    <FloatingButtons img="airport-car-rental_small.jpg" color="white" l1="Best Things to Do" l2="Visa Requirements" 
       l3="Money and Costs" l4="Best Road Trips" l5="Traveling with Kids" l6="Things to Know"
       l1h="#BestThing" l2h="#Visa" l3h="#Money" l4h="#RoadTrips" l5h="#Traveling" l6h="#toKnow" h="Guidens To Enjoy Your Journey"
       p={p7}/>

<div class="Besttimen">
<PlanBox h="Our edit of bold and inspiring trips 
            we’ve curated for travelers like you."
         btn="Let us plan your trip"
         link="/Gossip"/>

    <header>Planning Tools</header>
    <TimeSection  id="BestThing"
                  topic="Best Things to Do"
                  p={p1}  
                  image="things.jpg"/>

    <TimeSection  topic="Visa Requirements" 
                  id="Visa"
                  p={p2}
                  image="visa.jpg"/>

    <PlanBox h="Apply visa online"
        btn="Click here to derect onlive visa application"
        link="https://eta.gov.lk/slvisa/"/>

        <TimeSection  id="Money"
                      topic="Money and Costs" 
                      p={p3}
                      image="money.jpg"/>
        <TimeSection  topic="Best Road Trips" 
                      id="RoadTrips"
                      p={p4}
                      image="road.jpg"/>
        <TimeSection  topic="Traveling with Kids" 
                      p={p5}
                      id="Traveling"
                      image="trawelwithkids.jpg"/>
        <TimeSection  topic="Things To Know" 
                      p={p6}
                      id="toKnow"
                      image="toknow.jpg"/>

    <PlanBox h="Read Tour guide by MINISTRY OF TOURISM"
             btn="Read the pdf"
             link="" 
             on ={openPDF}/>

    <div class="Places-con1" style={{width: "100%"}}>
         <Button1 link="/VisitSriLanka" txt="Back "/>
    </div>

    </div>
      <InnerFooter/>
    </div>
  )
}
