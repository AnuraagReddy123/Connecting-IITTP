import React from "react";
import "./productDetails.css";
import buyImage from "./buyDefaultImage.jpg"

/* To-Do

*/

function ProductDetails(props) {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-md-6 leftSection">
          <div className="card productdetails">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={props.productDetails.image[0]} className="d-block w-100" alt="..."/>
              </div>
                {
                  props.productDetails.image.filter((i) => props.productDetails.image.indexOf(i) !== 0).map((imageUrl) => <div className="carousel-item">
                  <img src={imageUrl} className="d-block w-100" alt={buyImage}/>
                </div>)}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h5>Details</h5>
            <p>{props.productDetails.title}</p>
            <div className="line"></div>
            <h5>Description</h5>
            <p>{props.productDetails.description}</p>
          </div>
        </div>
        <div className="col-md-6 rightSection">
          <div className="card productdetails">
            <h5>Price</h5>
            <p>{props.productDetails.price}</p>
            <p>{props.productDetails.title}</p>
            <div class="line"></div>
            <h5>Seller Details</h5>
            <p>Name : {props.productDetails.name}</p>
            <p>Address : {props.productDetails.address}</p>
            <p>Mobile Number : {props.productDetails.mobileNumber}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
