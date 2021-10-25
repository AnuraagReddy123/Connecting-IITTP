import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";
import SecondHandShopping from "./SecondHandShopping/secondHandShopping";
import shShoppingImage from "./SecondHandShopping/secondHandShoppingImage.jpg";
import "./shopping.css"

function Shopping(props) {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/shopping"
          render={() => (
            <div>
              <nav className="navbar navbar-light shoppingNavbar">
                <div className="container-fluid">
                  <h4 className="categoryName">Shopping</h4>
                </div>
              </nav>

              <div className="container-fluid cardsList">
                <div className="row">
                  <div className="col-md-3 card1">
                    <Link to="/shopping/secondHandShopping" className="shShoppingCardLink">
                      <CategoryCard
                        cardName="Second-Hand Shopping"
                        cardText="Every item purchased second hand means one less new one produced."
                        cardImageLink={shShoppingImage}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route exact path="/shopping/secondHandShopping" render={() => <SecondHandShopping/>} />
      </Switch>
    </Router>
    
  );
}

export default Shopping;
