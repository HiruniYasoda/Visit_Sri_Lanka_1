import React from 'react';

export default function TimeSection(props) {
  const paragraphs = props.p.split('\n\n'); 

  return (
    <div id={props.id}>
      <h1>{props.topic}</h1>
      {paragraphs.map((paragraph, index) => (
        <p key={index}>{paragraph}</p> 
      ))}
       <img src={props.image} alt="Place"/>
       <br></br><br></br><br></br>
      <hr />
    </div>
  );
}
