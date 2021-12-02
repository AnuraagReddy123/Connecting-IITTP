import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BuyingCard from "../../components/BuyingCard/buyingCard";
import axios from 'axios';
import "./buy.css";
import { useHistory } from 'react-router';

/*  TO-DO
    change prodectName to title : Done
    restrict title content size on card
*/
function Buy() {

  const [buyingItems, setBuyingItems] = useState([]);
  const [buyingItem, setBuyingItem] = useState({ title: "", category: "", description: "", price: "", address: "", mobileNumber: "", image: "", name: "", username: ""});
  const history = useHistory();

  const port = process.env.PORT || 4000;
  let url = 'http://localhost:';
  if (process.env.NODE_ENV === 'production')
    url = 'https://save-environment-iittp.herokuapp.com';
  else url = `http://localhost:${port}`;


  useEffect(() => {
    axios.get(`${url}/buyItems`)
      .then(response => {
          const buyingItems = response.data;
          setBuyingItems(buyingItems);
        
      })
  });

  const handleClick = (e) => {
    setBuyingItem(e);
  }

  const handleSell = (e) => {
    history.push("/sell");
  }

  return (
    <Router>
      <div className="container-fluid">
        <div className="row m-2">
          <div className="col-md-2 sideBar">
            <ul className="sideBarList">
              <Link to="/buy" className="listItemName">
                <li className="sideBarListItem">All</li>
              </Link>

              <Link to="/buy/electronics" className="listItemName">
                <li className="sideBarListItem">Electronics</li>
              </Link>

              <Link to="/buy/furniture" className="listItemName">
                <li className="sideBarListItem">Furniture</li>
              </Link>

              <Link to="/buy/books_sports_hobbies" className="listItemName">
                <li className="sideBarListItem">Books, Sports & Hobbies</li>
              </Link>

              <Link to="/buy/cars_bikes" className="listItemName">
                <li className="sideBarListItem">Cars and Bikes</li>
              </Link>

              <Link to="/buy/fashion" className="listItemName">
                <li className="sideBarListItem">Fashion</li>
              </Link>

              <Link to="/buy/kids_toys" className="listItemName">
                <li className="sideBarListItem">Kids and Toys</li>
              </Link>

            </ul>
            <div className="sellButtonSection">
              <p className="postYourAdd">Post Your Add</p>
                <div className="btn btn-primary sellButton" onClick={handleSell}>
                  SELL
                </div>
            </div>
          </div>

          <div className="col-md-10 buyingItems">
            <Switch>
              <Route
                exact
                path="/buy"
                render={() => <div className="container">
                <div className="row">
                  <h4>All</h4>
                  {
                    buyingItems.map((add) => (
                      <div className="col-md-3"><div className="buying_card" onClick={() => history.push(`/buyingItem/${add._id}`)}><BuyingCard productDetails = {add}/></div></div>
                      ))
                  }
                </div>
              </div>}
              />
              <Route
                exact
                path="/buy/electronics"
                render={() => <div className="container">
                  <div className="row">
                    <h4>Electronics</h4>
                    {
                      buyingItems.filter((i) => i.category === "electronics").map((add) => (
                        <div className="col-md-3"><div className="buying_card" onClick={() => history.push(`/buyingItem/${add._id}`)}><BuyingCard productDetails = {add}/></div></div>
                        ))
                    }
                  </div>
                </div>}
              />
              <Route
                exact
                path="/buy/furniture"
                render={() => <div className="container">
                <div className="row">
                  <h4>Furniture</h4>
                  {
                    buyingItems.filter((i) => i.category === "furniture").map((add) => (
                      <div className="col-md-3"><div className="buying_card" onClick={() => history.push(`/buyingItem/${add._id}`)}><BuyingCard productDetails = {add}/></div></div>
                      ))
                  }
                </div>
              </div>}
              />
              <Route
                exact
                path="/buy/books_sports_hobbies"
                render={() => <div className="container">
                <div className="row">
                  <h4>Books Sports Hobbies</h4>
                  {
                    buyingItems.filter((i) => i.category === "books_sports_hobbies").map((add) => (
                      <div className="col-md-3"><div className="buying_card" onClick={() => history.push(`/buyingItem/${add._id}`)}><BuyingCard productDetails = {add}/></div></div>
                      ))
                  }
                </div>
              </div>}
              />
              <Route
                exact
                path="/buy/cars_bikes"
                render={() => <div className="container">
                <div className="row">
                  <h4>Cars & Bikes</h4>
                  {
                    buyingItems.filter((i) => i.category === "cars_bikes").map((add) => (
                      <div className="col-md-3"><div className="buying_card" onClick={() => history.push(`/buyingItem/${add._id}`)}><BuyingCard productDetails = {add}/></div></div>
                      ))
                  }
                </div>
              </div>}
              />
              <Route
                exact
                path="/buy/fashion"
                render={() => <div className="fashion">
                <div className="row">
                  <h4>Fashion</h4>
                  {
                    buyingItems.filter((i) => i.category === "fashion").map((add) => (
                      <div className="col-md-3"><div className="buying_card" onClick={() => history.push(`/buyingItem/${add._id}`)}><BuyingCard productDetails = {add}/></div></div>
                      ))
                  }
                </div>
              </div>}
              />
              <Route
                exact
                path="/buy/kids_toys"
                render={() => <div className="container">
                <div className="row">
                  <h4>Kids & Toys</h4>
                  {
                    buyingItems.filter((i) => i.category === "kids_toys").map((add) => (
                      <div className="col-md-3"><div className="buying_card" onClick={() => history.push(`/buyingItem/${add._id}`)}><BuyingCard productDetails = {add}/></div></div>
                      ))
                  }
                </div>
              </div>}
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Buy;
