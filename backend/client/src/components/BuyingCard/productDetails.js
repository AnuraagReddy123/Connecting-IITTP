import React from "react";
import "./productDetails.css";
import buyImage from "./buyDefaultImage.jpg"

function ProductDetails(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 leftSection">
          <div className="card productdetails">
            <img src={buyImage} className="card-img-top" alt="" />
            <h5>Details</h5>
            <p>{props.productDetails.productName}</p>
            <div class="line"></div>
            <h5>Description</h5>
            <p>{props.productDetails.description}</p>
          </div>
        </div>
        <div className="col-md-6 rightSection">
          <div className="card productdetails">
            <h5>Price</h5>
            <p>{props.productDetails.price}</p>
            <p>{props.productDetails.description}</p>
            <div class="line"></div>
            <h5>Seller Details</h5>
            <p>Name : XYZ</p>
            <p>Address : {props.productDetails.address}</p>
            <p>Mobile Number : {props.productDetails.mobileNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
