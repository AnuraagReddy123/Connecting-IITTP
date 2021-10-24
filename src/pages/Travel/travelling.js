import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";
import "./travelling.css";
import Vehicle from "./Vehicle/vehicles.js";
import vehicleImage from "./Vehicle/travelling.jpg";

function Travelling(props) {

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
                  <span className="categoryName">Travelling</span>
                </div>
              </nav>

              <div className="container-fluid cardsList">
                <div className="row">
                  <div className="col-md-3 card1">
                    <Link to="/travelling/vehicles" className="vehicleCardLink">
                      <CategoryCard
                        cardName="No personal vehicle"
                        cardText="Some quick example text to build on the card title and make up the
          bulk of the card's content."
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
