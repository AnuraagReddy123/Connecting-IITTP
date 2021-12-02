// component for displaying a single food category page
import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./food.css"
import axios from "axios";
import FoodCard from "./FoodCard";

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

function Food() {

  const [cards, setcards] = useState([]);

  useEffect(() => {
    const fetchCards = () => {
      axios
        .get(`${url}/foodCategories`)
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
              <nav className="navbar navbar-light foodNavbar">
                <div className="container-fluid">
                  <h4 className="categoryName">Food</h4>
                </div>
              </nav>
              <Link
                to={`/singleFood/${card._id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <FoodCard card={card}/>
              </Link>
            </div>
        );
      })}
    </div>
  );
}

export default Food;
