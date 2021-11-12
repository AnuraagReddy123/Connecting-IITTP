import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";
import "./travelling.css";
import Vehicle from "./Vehicle/vehicles.js";
import vehicleImage from "./Vehicle/travelling.jpg";


function Travelling() {


  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/travelling"
          render={() => (
            <div>
              <nav className="navbar navbar-light travellingNavbar">
                <div className="container-fluid">
                  <h4 className="categoryName">Travelling</h4>
                </div>
              </nav>
                
              <div className="container-fluid cardsList">
                <div className="row">
                  <div className="col-md-3 card1">
                    <Link to="/travelling/vehicles" className="vehicleCardLink">
                      <CategoryCard
                        cardName="No personal vehicle"
                        cardText="Know how much money you can save by avoiding personal vehicles and see some reliable ways to reduce your fuel consumption."
                        cardImageLink = {vehicleImage}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route exact path="/travelling/vehicles" render={() => <Vehicle/>} />
      </Switch>
    </Router>
    
  );
}

export default Travelling;
