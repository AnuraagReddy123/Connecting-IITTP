import React from "react";

function TravellingCard(props) {
  return (
    <div className="card" onClick="" style={{ width: "18rem" }}>
      <img src="images/travelling.jpg" className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.cardName}</h5>
        <p className="card-text">{props.cardText}</p>
      </div>
    </div>
  );
}

export default TravellingCard;
