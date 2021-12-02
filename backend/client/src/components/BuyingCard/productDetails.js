
// This file shows the contents of a particular add by fetching it from database using add's id.

import React from "react";
import "./productDetails.css";
import buyImage from "./buyDefaultImage.jpg"
import { useState, useEffect } from "react";
import axios from 'axios';

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;
 
function ProductDetails({ match }) {
  const [add, setAdd] = useState({});
  console.log("param", match);
  useEffect(() => {
    const fetchBlog = () => {
      axios
        .get(`${url}/buyItems/${match.params.id}`)
        .then((res) => {
          setAdd(res.data);
          console.log("hi", add);
        })
        .catch((err) => {
          console.log("hello",err);
        });
    };
    fetchBlog();
  }, []);

  return (
    <div>{Object.keys(add).length === 0 ? (
      // placeholder if the contents are yet to load
      <div className="placeholder container-fluid products">
      <div className="placeholder row">
        <div className="placeholder col-md-6 pls">
          <div className="placeholder card ls">
            <img src="" className="placeholder"/>
            <h5>Details</h5>
            <p className="placeholder-glow"></p>
            <div className="placeholder line"></div>
            <h5 >Description</h5>
            <p className="placeholder "></p>
          </div>
        </div>
        <div className="placeholder col-md-6 pls">
          <div className="placeholder card">
            <h5>Price</h5>
            <p className="placeholder-glow"></p>
            <p className="placeholder-glow"></p>
            <div class="line"></div>
            <h5>Seller Details</h5>
            <p className="placeholder-glow"></p>
            <p className="placeholder-glow"></p>
            <p className="placeholder-glow"></p>
          </div>
        </div>
      </div>
    </div>
    ) : (
      // If the add is successfully fetched
    <div className="container-fluid products">
      <div className="row">
        <div className="col-md-6 leftSection">
          <div className="card productdetails">
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
              <div className="carousel-inner">
              <div className="carousel-item active">
                <img src={add.image[0]} className="d-block w-100 addImage" alt="..."/>
              </div>
                {
                  add.image.filter((i) => add.image.indexOf(i) !== 0).map((imageUrl) => <div className="carousel-item">
                  <img src={imageUrl} className="d-block w-100 addImage" alt={buyImage}/>
                </div>)}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" style={{backgroundColor: "black"}} aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                <span className="carousel-control-next-icon" style={{backgroundColor: "black"}} aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
            <h5>Details</h5>
            <p>{add.title}</p>
            <div className="line"></div>
            <h5>Description</h5>
            <p>{add.description}</p>
          </div>
        </div>
        <div className="col-md-6 rightSection">
          <div className="card productdetails">
            <h5>Price</h5>
            <p>{add.price}</p>
            <p>{add.title}</p>
            <div class="line"></div>
            <h5>Seller Details</h5>
            <p>Name : {add.name}</p>
            <p>Address : {add.address}</p>
            <p>Mobile Number : {add.mobileNumber}</p>
          </div>
        </div>
      </div>
    </div>)}
    </div>
  );
}

export default ProductDetails;
