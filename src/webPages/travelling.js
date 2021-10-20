import React, {useState} from "react";
import TravellingCard from "../components/travellingCard";
import "./travelling.css";

function Travelling(props) {

  const handleCard = () => {

  }

  return (
    <div>
      <nav className="navbar navbar-light travellingNavbar">
        <div className="container-fluid">
          <span className="categoryName">Travelling</span>
        </div>
      </nav>

      <div className="container-fluid cardsList">
        <div className="row">
          <div className="col-md-3 card1">
            <TravellingCard cardName="No personal vehicle" cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."/>  
          </div>
        </div>
      </div>

    </div>
  );
}

export default Travelling;
