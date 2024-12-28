import React from 'react'
import PlaceCard from './InnerPageComp/PlaceCard'
import PlaceImgCard from './InnerPageComp/PlaceImgCard'
import ImageCar2 from './InnerPageComp/ImageCar2'
import { p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,p16,p17,p18,p19,p20,p21,p22,
  p23,p24,p25,p26,p27,p28,p29,p30,p31,p32,p_h1,p_h2,p_h3,p_h4,p_p1,p_p2,p_p3,p_p5,p_h5,p_p6 } from './InnerPageComp/PlacesPara';
import './game.css';
import InnerFooter from './InnerPageComp/InnerFooter';
import './InnerPageComp/InnerComCss/innerfoot.css'
import Button1 from './InnerPageComp/Button1';
import FloatingButtons from './FloatingBtn';
import {q4,q5,q6,q7,a4,a5,a6,a7} from './InnerPageComp/FandQpara'
import FandQ from './InnerPageComp/FandQ';
import Imgcardud from './InnerPageComp/Imgcardud'


export default function Places() {
  return (
    <div>
      <FloatingButtons img="Tea-Planation-Sri-Lanka-scaled.jpg"
      l1="Explore Mountains" l2="Relax at Beaches" l3="Visit Towers/Castles" l4="Discover Natural Beauty" l5="Contact us"
      l1h="#Mountains" l2h="#beaches" l3h="#towers" l4h="#beauty" l5h="#Foot" bc="rgba(245, 245, 220, 0)"
      h="Explor The Real Beauty With The View" p={p32}/>
      <br/>
      <header>Must see Attractions </header>

      <div class="Places-con">

        <h1>Notice</h1>
        <h2 id="Mountains">! Place your mouse on the Image card and click "Win tickets" to play game and WIN TICKETS *</h2>
        <h3>{p_h1}</h3>
        <h4> {p_p1}</h4>

        <br/> 
        <div class="allPlaces">
        <h2>! You don't want tickets to visit and enjoy these places</h2>
      
        <div class="Card_row">
          <PlaceImgCard image="sigiriya.jpg"/>
          <PlaceCard image="pidurangala.jpg" p={p1} topic="Pidurangala"/>
          <PlaceCard image="worlds end.jpg" p={p2} topic="Worlds end"/>
        </div>

        <div class="Card_row">
          <ImageCar2 image="Things-to-do-in-Sigiriya-.jpg" p={p3} topic="Pink Rock"/>
          <ImageCar2 image="sigiriya1.jpg" p={p4} topic="Sigiriya"/>
        </div>
      
        <h3 id="beaches">{p_h2} </h3>
        <h4>{p_p2}</h4>
        <h2>! You don't want tickets to enjoy the waves.  </h2>

        <div class="Card_row">
          <PlaceImgCard image="uppaweli beach.jpg"/>
          <PlaceCard image="Arugam bey.jpg" p={p5} topic="Arugam bey"/>
          <PlaceCard image="kalkuda.jpg" p={p6} topic="kalkuda"/>
        </div>

        <div class="Card_row">
          <PlaceCard image="hummanaya1.jpg" p={p7} topic="Hummanaya "/>

          <div class="UpDown">
            <Imgcardud image="marbal beach.jpg" p={p8} topic="Marbal beach"/><br/>

            <header 
                    style={{background: "linear-gradient(to right, rgb(109, 172, 185), rgb(185, 172, 109) )",
                    color: 'white', borderRadius: "30px", marginLeft: "5%"}}> Ammazing beach side</header>
          </div>
        </div>

        <h3 id="towers"> {p_h3} </h3>
        <h4> {p_p3}</h4>
          
        <div class="Card_row">
          <PlaceImgCard image="lotus tower.jpg"/>
          <PlaceCard image="ambuluwawa-tower-is-the.jpg" p={p9} topic=" Ambuluwawa tower" win="win free tickets"/>
          <PlaceCard image="thewatta.jpg" p={p10} topic="Thewatta church"/>
        </div>

        <h2> PLAY THE GAME & WIN TICKETS      (please check the photo card) </h2>

        <div class="Card_row">
          <PlaceCard image="llotustower.jpeg" p={p11} topic="Lotustower" win="win free tickets"/>
          <div class="UpDown">
            <Imgcardud image="kinniya.jpg" p={p12} topic="Kinniya Bridge"/><br/>
            <header 
                    style={{background: "linear-gradient(to right, rgb(14, 6, 37), rgb(37, 5, 31) )",
                    color: 'white', borderRadius: "30px", marginLeft: "5%"}}>here! Enjoy your view </header>
          </div>
        </div>

        <div class="Card_row">
          <ImageCar2 image="5floor-1024x683.jpg" p={p13} topic=" hotel shangri la"/>
          <ImageCar2 image="galle fort.jpg" p={p14} topic="Galle fort" win="win free tickets"/>
        </div>

        <h3>{p_h4} </h3>

        <div class="Card_row">
          <PlaceImgCard image="jaffna fort.jpeg"/>
          <PlaceCard image="museum.jpg" p={p15} topic="Museum" win="win free tickets"/>
          <PlaceCard image="Queen’s-Hotel-img-65.png" p={p16} topic="Queen’s-Hotel"/>
        </div>

        <div class="Card_row">
          <PlaceCard image="edishon.jpg" p={p17} topic="Edishon Banglow" win="win free tickets"/>
          <PlaceCard image="dutch.jpg" p={p18} topic="Dutch building"/>
          <PlaceCard image="demo of rock.jpeg" p={p19} topic="Anuradapura"/>
        </div>

        <div class="Card_row">
          <PlaceCard image="trinco.jpg" p={p20} topic="Trinco"/>
          <PlaceCard image="Siri-Gautama-Sambuddharaja-Maligawa.jpg" p={p21} topic="Sri-Gautama-Buddaraja-Maligawa"/>
          <PlaceCard image="Guruge-National-Park.jpg" p={p22} topic="Guruge-National-Park"win="win free tickets"/>
        </div>

        <div class="Card_row">
          <ImageCar2 image="kandy.jpg" p={p23} topic="Kandy"/>
          <ImageCar2 image="portcity.jpg" p={p24} topic="Port city " win="win free tickets" />
        </div>

        <h3 id="beauty"> {p_h5} </h3>
        <h4>{p_p5} </h4>
        <h2>! You don't want tickets to visit and enjoy these places</h2>
          
        <div class="Card_row">
          <PlaceImgCard image="pahanthudawa.jpg"/>
          <PlaceCard image="sinharaja.JPG" p={p25} topic="Sinharaja " win="win free tickets"/>
          <PlaceCard image="belihuloya.jpg" p={p26} topic="Belihul Oya"/>
        </div>

        <div class="Card_row">
          <PlaceCard image="udawalawa.jpg" p={p27} topic="Udawalawa" win="win free tickets"/>
          <PlaceCard image="sembuwatta.jpg" p={p28} topic="SembuWatta"/>
          <PlaceCard image="nine-arch.jpg" p={p29} topic="nine-arch"/>
        </div>

        <div class="Card_row">
          <ImageCar2 image="bogawantalawa.jpg" p={p30} topic="bogawantalawa"/>
          <ImageCar2 image="Waterfalls-Srilanka.jpg" p={p31} topic="Water falls"/>
        </div>

        <hr></hr>
      </div>

      <div class="end">
    <h4>{p_p6}</h4>
      <br></br> 
      </div>
    </div>
    <br></br>
    <div class="faqsection">
    <header>F&Q</header>
      <FandQ q={q4} ans={a4}/>
      <FandQ q={q5} ans={a5}/>
      <FandQ q={q6} ans={a6}/>
      <FandQ q={q7} ans={a7}/>
      </div>
      <div class="Places-con">
        <Button1 link="/VisitSriLanka" txt="Back "/>
        </div>
    <div id="Foot">
    <InnerFooter/>
    </div>
   
  </div>
  )
}
