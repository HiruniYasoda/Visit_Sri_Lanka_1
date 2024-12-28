import React from 'react'
import './SectionsCSS/navigationbar.css'
import { Link } from 'react-router-dom';

export default function NavigationBar() {
  return (
    <div>       
      <ul>
                <li><a href="#Must_see_attractions">Attractions</a></li>
                <li><a href="#Planning_tools">Planning tools</a></li>
                <li><a href="#About_SriLanka">About Sri Lanka</a></li>
                <li><a href="#Pop_Acts"> Popular activities</a></li>
                <li><Link to="/Contact">Contact us</Link></li>
        </ul> 
        
    </div>
  )
}
