import React from "react";
import "./ResyCard.css"


const ResyCard = ({id, name, date, time, number}) => {
  return (
    <div className="resy-card">
      <h2>{name}</h2>
      <h3>{date}</h3>
      <h3>{time}</h3>
      <h3>Number of guests: {number}</h3>
      <button className="cancel-button">Cancel</button>
    </div>
  )
}


export default ResyCard;
