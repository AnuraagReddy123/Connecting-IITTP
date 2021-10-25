import React from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";
import Composting from "./Composting/composting";
import compostingImage from "./Composting/compostingImage.jpg";
import "./home.css";

function Home(props) {
  return (
    <Router>
      <Switch>
        <Route
          exact
          path="/homeCategory"
          render={() => (
            <div>
              <nav className="navbar navbar-light homeCategoryNavbar">
                <div className="container-fluid">
                  <h4 className="categoryName">Home</h4>
                </div>
              </nav>

              <div className="container-fluid cardsList">
                <div className="row">
                  <div className="col-md-3 card1">
                    <Link
                      to="/homeCategory/composting"
                      className="compostingLink"
                    >
                      <CategoryCard
                        cardName="Composting"
                        cardText="Composting takes food scraps, plants, and other organic matter and returns it to the earth to create a nutrient rich soil. And, it’s awesome for the planet."
                        cardImageLink={compostingImage}
                      />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        />
        <Route
          exact
          path="/homeCategory/composting"
          render={() => <Composting />}
        />
      </Switch>
    </Router>
  );
}

export default Home;
