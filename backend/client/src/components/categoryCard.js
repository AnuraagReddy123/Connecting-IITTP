import React from "react";

function CategoryCard(props) {
  return (
    <div className="card shadow rounded" onClick="" style={{ width: "18rem" }}>
      <img src={props.cardImageLink} className="card-img-top" alt="" />
      <div className="card-body">
        <h5 className="card-title">{props.cardName}</h5>
        <p className="card-text">{props.cardText}</p>
      </div>
    </div>
  );
}

export default CategoryCard;
