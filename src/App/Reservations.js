
import React from "react";
import "./resy-box.css";
import ResyCard from "./ResyCard"

const Reservations =({reservations}) => {
  const resyCards = reservations.map(resy => {
    return (
      <ResyCard
        id= {resy.id}
        name={resy.name}
        date={resy.date}
        time={resy.time}
        number={resy.number}
        key={resy.id}
      />
    )
  })

  return (
    <div className="resy-box">
      {resyCards}
    </div>
  )
}















export default Reservations
