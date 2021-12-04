
/* This file is used to describe a add through card (by displaying images of add, detals of add),
 so that multiple such card can be shown on the buy page. */

import React from "react";
import "./buyingCard.css";

function BuyingCard(props) {

  return (
    <div>
    {Object.keys(props).length === 0 ? (
      // placeholder if the contents are yet to load
        <div className="card" aria-hidden="true">
        <img src="" className="placeholder card-img-top pimg" alt=""/>
        <div className="card-body">
          <h5 className="card-title placeholder-glow">
            <span className="placeholder col-6"></span>
          </h5>
          <p className="card-text placeholder-glow">
            <span className="placeholder col-7"></span>
            <span className="placeholder col-4"></span>
            <span className="placeholder col-4"></span>
          </p>
        </div>
      </div>
      ) : (
      // If the add is successfully fetched
      <div className="card buyingcard">
        <img src={props.productDetails.image[0]} className="card-img-top cardImage" alt="" />
        <div className="card-body">
          <h6 className="card-title text-truncate">{props.productDetails.title}</h6>
          <p className="card-text">Price : {props.productDetails.price} Rs</p>
        </div>
      </div> )
    }
    </div>
  );
}

export default BuyingCard;