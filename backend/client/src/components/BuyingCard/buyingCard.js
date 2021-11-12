import React from "react";
import buyImage from "./buyDefaultImage.jpg"
import "./buyingCard.css";

function BuyingCard(props) {

  return (
      <div className="card buyingcard">
        <img src={buyImage} className="card-img-top" alt="" />
        <div className="card-body">
          <h6 className="card-title">{props.productDetails.productName}</h6>
          <p className="card-text">Price : {props.productDetails.price} Rs</p>
        </div>
      </div>
  );
}

export default BuyingCard;