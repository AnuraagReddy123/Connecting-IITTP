
/*
  Different ways will be provided to the users for saving the environment while
  doing shopping along with saving money.
  This page contains several cards(sub categories of shopping category). 
  On clicking on any of the sub-category user will redirected to that particular sub-category page.
*/

import axios from "axios";
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./shopping.css"
import ShoppingCard from "./ShoppingCard";

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

function Shopping(props) {

  const [cards, setcards] = useState([]);

  useEffect(() => {
    const fetchCards = () => {
      axios
        .get(`${url}/shoppingCategories`)
        .then((res) => {
          setcards(res.data);
          console.log(cards);
        })
        .catch((err) => console.log(err));
    };
    fetchCards(); // fetch the cards from the database
  },[]);

  return (
    <div>
      {cards.map((card) => {
        return (
            <div>
              <nav className="navbar navbar-light shoppingNavbar">
                <div className="container-fluid">
                  <h4 className="categoryName">Shopping</h4>
                </div>
              </nav>
              <Link
                to={`/singleShopping/${card._id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <ShoppingCard card={card}/>
              </Link>
            </div>
        );
      })}
    </div>
  );
}

export default Shopping;
