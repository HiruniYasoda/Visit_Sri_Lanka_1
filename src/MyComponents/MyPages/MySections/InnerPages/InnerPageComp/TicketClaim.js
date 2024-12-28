import React from 'react'
import TickClaimForm from './TickClaimForm'
import './InnerComCss/ticketclaim.css'
import Button1 from './Button1'

export default function TicketClaim() {
  return (
    <div className="TicClaim">
        <header>
            <h1>Congratulations</h1>
        </header>
        <p>Please fill the following form and claim your tickets</p>
        <TickClaimForm/>
        <div class="Places-con">
        <Button1 link="/VisitSriLanka" txt="Back "/>
        </div>
    </div>
  ) 
}
