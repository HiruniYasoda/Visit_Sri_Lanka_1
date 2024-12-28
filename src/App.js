

import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ScrollToTop from './MyComponents/ScrollToTop';
import Places from './MyComponents/MyPages/MySections/InnerPages/Places';
import VisitSriLanka from './MyComponents/MyPages/VisitSriLanka';
import BestTime from './MyComponents/MyPages/MySections/InnerPages/BestTime';
import PlaceCard from './MyComponents/MyPages/MySections/InnerPages/InnerPageComp/PlaceCard';
import Game from './MyComponents/MyPages/MySections/InnerPages/Game';
import NewsandAll from './MyComponents/MyPages/MySections/InnerPages/NewsandAll';
import Aricles from './MyComponents/MyPages/MySections/InnerPages/Aricles';
import Contact from './MyComponents/MyPages/MySections/InnerPages/Contact';
import Gossip from './MyComponents/MyPages/MySections/Gossip';
import TicketClaim from './MyComponents/MyPages/MySections/InnerPages/InnerPageComp/TicketClaim';



export default function App() {
  return (
    <Router>
      <ScrollToTop /> {/*ScrollToTop*/}
      <div className="MYWEB">
      <Routes>
        {/* Define route paths */}
        <Route path="/" element={<VisitSriLanka />} />            
        <Route path="/Places" element={<Places />} />            
        <Route path="/BestTime" element={<BestTime />} />        
        <Route path="/" element={<PlaceCard />} />
        <Route path="/Game" element={<Game />} />
        <Route path="/NewsandAll" element={< NewsandAll/>} />
        <Route path="/VisitSriLanka" element={< VisitSriLanka/>} />
        <Route path="/Aricles" element={< Aricles/>} />
        <Route path="/Contact" element={< Contact/>} />
        <Route path="/Gossip" element={< Gossip/>} />
        <Route path="TicketClaim" element={< TicketClaim/>} />

      </Routes>
      </div>
    </Router>
  );
}




























