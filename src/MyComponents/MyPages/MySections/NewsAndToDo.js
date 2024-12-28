import React from 'react';
import './SectionsCSS/Newsandtodo.css';
import { Link } from 'react-router-dom';

export default function NewsAndToDo() {
  return (
    <div id="About_SriLanka">
        <section class="mask_background">
             <div class="to_do">
              <div class="todotext">
                All Interests, Art & Culture, Brief history, Foods & Drinks
                </div>
                  <br></br>
                  <Link to="/NewsandAll" >
                  <button>
                    view more
                  </button>
                  </Link>
                <br></br>
             </div>
        </section>
    </div>
  )
}
