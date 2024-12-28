import React from 'react'
import './game.css'
import Gamebuttons from './InnerPageComp/Gamebuttons'
import Linkbox from './InnerPageComp/Linkbox'
import Rulebox from './InnerPageComp/Rulebox'
import Button1 from './InnerPageComp/Button1'


export default function Game() {
  return (
    <div>
      <div class="game">
        <header>Play Game , WIN TICKETS </header>
        <Linkbox/>
        <Rulebox/>

        <div className="bttns">
        <Gamebuttons/> 
        </div>
        
        </div>
        <div class="Places-con">
        <Button1 link="/VisitSriLanka" txt="Exit game "/>
        </div>
    </div>
  )
}
