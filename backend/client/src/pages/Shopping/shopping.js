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
                to={`/singleShoppingCard/${card._id}`}
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
