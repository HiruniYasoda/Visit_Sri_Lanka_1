import React from 'react'
import './SectionsCSS/flipbox.css'
import FlipBoxComp from './IndividualComponents/FlipBoxComp'
import { p1,p2,p3 } from './IndividualComponents/ComponentsPara/FlipboxP';
import { Link } from 'react-router-dom';

export default function FlipBox() {
  return (
  <div id="Must_see_attractions">
     <section class="Must_see_attractions">
     <br/>
     <header>Must see attractions</header>
     <br/><br/>
        <div class="tot">
        <FlipBoxComp image="Wildlife-Tour-of-Sri-Lanka.jpg" top ="Yala national park" p={p1}/>
        <FlipBoxComp image="gal-vihara-03.jpg" top ="Gal viharaya Polonnaruwa" p={p2}/>
        <FlipBoxComp image="Red-Mosque-in-Colombo.jpg" top ="Red Mosque" p={p3}/>
        <Link to="/Places" >
        <button> → </button>
        </Link>
        </div>         
      </section>
  </div>
  )
}
