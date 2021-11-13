import React, { useState, useEffect } from "react";
import { Link, BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BuyingCard from "../../components/BuyingCard/buyingCard";
import ProductDetails from "../../components/BuyingCard/productDetails";
import axios from 'axios';
import "./buy.css";
import Sell from '../Sell/sell';

/*  TO-DO
    change productName to title
    restrict title content size on card
*/
function Buy() {

  // const items = [{key: 1, productName: "Shoes", category: "fashion", description: "abc def ghi jklm n op qrs st uvw xy z", price: 500, address: "mumbai, maharashtra", mobileNumber: "1234567890"},
  // {key: 2, productName: "Mobile Phone", category: "electronics", description: "abc def ghi jklm n op qrs st uvw xy z", price: 5000, address: "mumbai, maharashtra", mobileNumber: "1234567890"},
  // {key: 3, productName: "Dell Laptop", category: "electronics", description: "abc def ghi jklm n op qrs st uvw xy z", price: 50000, address: "mumbai, maharashtra", mobileNumber: "1234567890"},
  // {key: 4, productName: "Car", category: "cars_bikes", description: "abc def ghi jklm n op qrs st uvw xy z", price: 500000, address: "mumbai, maharashtra", mobileNumber: "1234567890"},
  // {key: 5, productName: "Class Notes", category: "books_sports_hobbies", description: "abc def ghi jklm n op qrs st uvw xy z", price: 500, address: "mumbai, maharashtra", mobileNumber: "1234567890"},
  // {key: 6, productName: "Study Table", category: "furniture", description: "abc def ghi jklm n op qrs st uvw xy z", price: 500, address: "mumbai, maharashtra", mobileNumber: "1234567890"},
  // {key: 7, productName: "Teddy Bear", category: "kids_toys", description: "abc def ghi jklm n op qrs st uvw xy z", price: 500, address: "mumbai, maharashtra", mobileNumber: "1234567890"},
  // {key: 8, productName: "Dining Table", category: "furniture", description: "abc def ghi jklm n op qrs st uvw xy z", price: 500, address: "mumbai, maharashtra", mobileNumber: "1234567890"},
  // {key: 9, productName: "Watch", category: "fashion", description: "abc def ghi jklm n op qrs st uvw xy z", price: 500, address: "mumbai, maharashtra", mobileNumber: "1234567890"}]

  const [buyingItems, setBuyingItems] = useState([]);
  const [buyingItem, setBuyingItem] = useState({key: "", productName: "", category: "", description: "", price: 5000, address: "", mobileNumber: ""});

  useEffect(() => {
    axios.get('http://localhost:4000/buyItems')
      .then(response => {
        
          const buyingItems = response.data[0].buyingItems;
          setBuyingItems(buyingItems);
        
      })
  });

  const handleClick = (e) => {
    setBuyingItem(e);
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
              <Link to="/sell" className="listItemName">
                <div className="btn btn-primary sellButton">
                  SELL
                </div>
              </Link>
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
                      <div className="col-md-3"><Link to="/buy/buyingItem" className="buying_card" onClick={() => handleClick(add)}><BuyingCard productDetails = {add}/></Link></div>
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
                        <div className="col-md-3"><Link to="/buy/buyingItem" className="buying_card" onClick={() => handleClick(add)}><BuyingCard productDetails = {add}/></Link></div>
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
                      <div className="col-md-3"><Link to="/buy/buyingItem" className="buying_card" onClick={() => handleClick(add)}><BuyingCard productDetails = {add}/></Link></div>
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
                      <div className="col-md-3"><Link to="/buy/buyingItem" className="buying_card" onClick={() => handleClick(add)}><BuyingCard productDetails = {add}/></Link></div>
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
                      <div className="col-md-3"><Link to="/buy/buyingItem" className="buying_card" onClick={() => handleClick(add)}><BuyingCard productDetails = {add}/></Link></div>
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
                      <div className="col-md-3"><Link to="/buy/buyingItem" className="buying_card" onClick={() => handleClick(add)}><BuyingCard productDetails = {add}/></Link></div>
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
                      <div className="col-md-3"><Link to="/buy/buyingItem" className="buying_card" onClick={() => handleClick(add)}><BuyingCard productDetails = {add}/></Link></div>
                      ))
                  }
                </div>
              </div>}
              />
              <Route
                exact
                path="/buy/buyingItem"
                render={() => <ProductDetails productDetails={buyingItem}/> }
              />
              <Route
                exact
                path="/sell"
                render={() => <Sell/> } 
              />
            </Switch>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default Buy;
