import React from "react";
import "./ResyCard.css"


const ResyCard = ({id, name, time, number}) => {
  return (
    <div className="resy-card">
      <h2>{name}</h2>
      <h2>{time}</h2>
      <h2>Number of guests: {number}</h2>
    </div>
  )
}


export default ResyCard;
