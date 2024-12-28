import React from 'react'
import './News.css'
import NewsCard from './InnerPageComp/NewsCard'
import { p1,p2,p3,p4,p5,p6,p7,p8,p9,p10,p11,p12,p13,p14,p15,
  p16,p17,p18,p19,p20, p21,p22,p23,p24, c1_1,c1_2,c1_3,c2_1,c2_2,c2_3,c3_1,c3_2,c3_3,
  c4_1,c4_3,c5_1,c5_2 ,c6_1,c6_2} from './InnerPageComp/AllnewsPara';
import InnerFooter from './InnerPageComp/InnerFooter';
import FloatingButtons from './FloatingBtn';
import Button1 from './InnerPageComp/Button1';
import {q11,q12,q13, q14, a11,a12,a13, a14} from './InnerPageComp/FandQpara'
import FandQ from './InnerPageComp/FandQ';

export default function NewsandAll() {
  return (
    <div>
      <FloatingButtons img="cultural-show-sri-lanka.jpg"
      l1="Genaral Info" l2="Culture" l3="Religiouns" l4="Tradition" l5="Politics" l6="Economic"
      l1h="#Genaral" l2h="#culture" l3h="#Religious" l4h="#Tradition" l5h="#Politics" l6h="#economic" 
      color="white" h="All Around The World, The Uniqueness Of Each Country Lies In Its Culture," p={p24}/>
      
<header>All Interests, Art & Culture, Brief history, Foods & Drinks</header>
<br></br><br></br>
<div class="NewsandAll">
       <div id="Genaral">
       <header>Genaral Info</header>
      <NewsCard topic="Genaral" 
                  p={p16} imgu="gen2.jpg" imgd="gen1.jpg"
                  color1={c4_1}   color3={c4_3} 
                  reverse={true}/>
      <NewsCard topic="Brief history" 
                   p={p17} imgu="bhis1.jpeg" imgd="bhis2.jpg"
                  color1={c4_1}   color3={c4_3} 
                  />
      <NewsCard topic="Championships" 
                  p={p18} imgu="slwin1.jpg" imgd="slwin2.jpg"
                  color1={c4_1}   color3={c4_3} 
                  reverse={true}/>
      <NewsCard topic="Past strugles" 
                  p={p19} imgu="tra2.jpg" imgd="tra1.jpeg"
                  color1={c4_1}   color3={c4_3} 
                  />                                  
                  </div>

        <div id="culture">
        <header>Culture</header>
        <NewsCard topic=" Traditional Dress" 
                  subtopic="(Osariya and Mul Aduma)" p={p1} imgu="osariya1.jpg" imgd="nilame.jpg"
                  color1={c1_1} color2={c1_2}  color3={c1_3} />
        <NewsCard topic=" Traditional Foods" 
                  subtopic="(Sweets, Curries, Meals)" p={p2}  imgu="tfood1.jpg" imgd="tfood2.jpg"
                  color1={c1_1} color2={c1_2}  color3={c1_3} reverse={true}/>
        <NewsCard topic=" Traditional Languages" 
                  subtopic="(Sanskrit and Pali)" p={p3}  imgu="tlan.jpg" imgd="tlan1.jpg"
                  color1={c1_1} color2={c1_2}  color3={c1_3} />
        <NewsCard topic="(Say Ayubowan, Smile)" 
                  subtopic="Osariya" p={p4}  imgu="tgreet.avif" imgd="tgreet2.jpg"
                  color1={c1_1} color2={c1_2}  color3={c1_3} reverse={true}/>  
        </div>


        <div id="Religious">
        <header>Religions</header>
        <NewsCard topic=" Buddhism" 
                  subtopic="(History of Buddhism)" p={p5}  imgu="tbudd1.jpg" imgd="tbudd2.jpg"
                color1={c2_1} color2={c2_2} color3={c2_3}/>
        <NewsCard topic=" Catholicism" 
                  subtopic="(History of Catholicism)" p={p6}  imgu="tcath1.jpg" imgd="tcath2.jpg"
                  color1={c2_1} color2={c2_2} color3={c2_3} reverse={true}/>
        <NewsCard topic="Hinduism" 
                  subtopic="(History of Hinduism)" p={p7}  imgu="thind1.jpg" imgd="thind2.jpg"
                  color1={c2_1} color2={c2_2} color3={c2_3}/>
        <NewsCard topic="Islam" 
                  subtopic="(History of Islam)" p={p8}  imgu="tislam1.jpg" imgd="tislam2.jpg"
                  color1={c2_1} color2={c2_2} color3={c2_3} reverse={true}/>
        
        </div>

        <div id="Tradition">
        <header>Tradition</header>
        <NewsCard topic="Traditional Dancing" 
                  subtopic="(Udarata, Pahatharata, Sabaragamuwa)" p={p9}  imgu="tdance2.jpg" imgd="tdance1.jpg"
                color1={c3_1} color2={c3_2} color3={c3_3}/>
        <NewsCard topic=" Traditional creations" 
                  subtopic="(Devil Masks, Rukada)" p={p10}  imgu="yaka.jpg" imgd="truk.jpg"
                  color1={c3_1} color2={c3_2} color3={c3_3} reverse={true}/>
        <NewsCard topic=" Traditional music" 
                  subtopic="(Bera Instruments)" p={p11}  imgu="ins1.jpg" imgd="bera2.png"
                  color1={c3_1} color2={c3_2} color3={c3_3}/>
        <NewsCard topic=" Traditional litriture" 
                  subtopic="(Ancient Books Written by Theros)" p={p12}  imgu="tlit1.jpg" imgd="tlit2.jpg"
                  color1={c3_1} color2={c3_2} color3={c3_3} reverse={true}/>
        <NewsCard topic=" Traditional Art" 
                  subtopic="Paintings" p={p13}  imgu="tart1.jpg" imgd="tart2.jpg"
                  color1={c3_1} color2={c3_2} color3={c3_3}/>  
        <NewsCard topic="Stone arts" 
                  subtopic="(Statues towers)" p={p14}  imgu="tstone2.jpeg" imgd="tstone1.jpg"
                  color1={c3_1} color2={c3_2} color3={c3_3} reverse={true}/>
        <NewsCard topic="Wooden Carvings" 
                  subtopic="" p={p15}  imgu="twcar2.jpg" imgd="twcar1.jpg"
                  color1={c3_1} color2={c3_2} color3={c3_3}/>  
        </div>
        
        <div id="Politics">
        <header>Politics</header>
        <NewsCard topic="politics" 
                  subtopic="" p={p20}  imgu="pol4.jpg" imgd="pol3.jpg"
                  color1={c5_1} color3={c5_2} reverse={true}/> 
        <NewsCard topic="Modern politics" 
                  subtopic="" p={p21}  imgu="pol1.jpg" imgd="pol2.jpg"
                  color1={c5_1}color3={c5_2}/> 
                  </div>
                  <div id="economic">

                    
                  <header>Economic</header>
        <NewsCard topic="Economic" 
                  subtopic="" p={p22}  imgu="econ1.jpg" imgd="econ2.jpg"
                  color1={c6_1} color3={c6_2} reverse={true}/> 
        <NewsCard topic="Facilities" 
                  subtopic="" p={p23}  imgu="fac1.jpg" imgd="fac2.jpg"
                  color1={c6_1}color3={c6_2}/>  
                  <div class="Places-con">
                  
                  </div>
                
                  </div>
                  
                  </div>
                  <br></br>
                  <div class="faqsection">
    <header>F&Q</header>
      <FandQ q={q11} ans={a11}/>
      <FandQ q={q12} ans={a12}/>
      <FandQ q={q13} ans={a13}/>
      <FandQ q={q14} ans={a14}/>
      
      </div>
      <div class="Places-con">
        <Button1 link="/VisitSriLanka" txt="Back "/>
        </div>
                  <InnerFooter/>
    </div>
  )
}
