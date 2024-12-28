import React from 'react'
import './SectionsCSS/guidearticle.css';
import ArticalBox from './IndividualComponents/ArticalBox';
import { p1,p2,p3,p4,p5,p6,p7 } from './IndividualComponents/ComponentsPara/ArticlesPara';
export default function GuideArtivles(){

  return (
    <div id="Planning_tools">
         <section class="second">
         <header>
            Planning Tools<br/>
            <h1>" Expert guidance to help you plan your trip in SRI LANKA "</h1>
         </header> <br/><br/>
         <div class="all">

            <div class="left_to_right">
                <ArticalBox img="quality_10584940.png" h="Best Things to Do" p={p1}/>
                <ArticalBox img="images (1).png" h="Visa Requirements" p={p2}/>
                <ArticalBox img="images (2).png" h="Money and Costs" p={p3}/>                
            </div>
             
            <div class="left_to_right">
                <ArticalBox img="images (3).png" h="Best Road Trips" p={p4}/>                
                <ArticalBox img="images kid.jpeg" h="Traveling with Kids" p={p5}/>                
                <ArticalBox img="images book.jpeg" h="Things to Know" p={p6}/>                      
            </div>
            
            <div class="left_to_right">
                <ArticalBox img="images.png" h="Transportation" p={p7}/>                 
            </div>

         </div>      
        </section>
        </div>
    
  )
}

