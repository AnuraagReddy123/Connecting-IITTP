import React from "react";
import buyImage from "./buyDefaultImage.jpg"
import "./buyingCard.css";

function BuyingCard(props) {

  return (
      <div className="card buyingcard">
        <img src={props.productDetails.image[0]} className="card-img-top cardImage" alt="" />
        <div className="card-body">
          <h6 className="card-title text-truncate">{props.productDetails.title}</h6>
          <p className="card-text">Price : {props.productDetails.price} Rs</p>
        </div>
      </div>
  );
}

export default BuyingCard;