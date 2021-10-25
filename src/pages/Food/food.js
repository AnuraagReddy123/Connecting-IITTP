import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";
import ReduceFoodWasteAtHome from "./ReduceFoodWasteAtHome/reduceFoodWasteAtHome";
import foodWasteImage from "./ReduceFoodWasteAtHome/foodWasteImage.jpg"
import "./food.css"

function Food(props) {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/food"
          render={() => (
            <div>
              <nav className="navbar navbar-light foodNavbar">
                <div className="container-fluid">
                  <span className="categoryName">Food</span>
                </div>
              </nav>

              <div className="container-fluid cardsList">
                <div className="row">
                  <div className="col-md-3 card1">
                    <Link to="/food/reduceFoodWasteAtHome" className="foodWasteCardLink">
                      <CategoryCard
                        cardName="Reduce Food Waste At Home"
                        cardText="lkgoiuew ierbiwue ejkrbIU sknFBOA KLSFI jko."
                        cardImageLink={foodWasteImage}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route exact path="/food/reduceFoodWasteAtHome" render={() => <ReduceFoodWasteAtHome/>} />
      </Switch>
    </Router>
    
  );
}

export default Food;
