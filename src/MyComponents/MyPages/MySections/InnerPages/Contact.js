import React from 'react'
import ContactForm from './InnerPageComp/ContactForm'
import './contact.css'
import InnerFooter from './InnerPageComp/InnerFooter'
import Button1 from './InnerPageComp/Button1'


export default function Contact() {
  return (
    <div>
    <div class="Con-us">
        <ContactForm/>
        <div class="Places-con">
        <Button1 link="/VisitSriLanka" txt="Back "/>
        </div>
    </div>
    <br></br>
    <br></br>
    
    <br></br>
    <InnerFooter/>
    </div>
  )
}
