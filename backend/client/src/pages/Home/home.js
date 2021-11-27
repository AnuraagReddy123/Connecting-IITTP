import React, { useEffect, useState } from "react";
import {Link} from "react-router-dom";
import "./home.css";
import HomeCard from "./HomeCard";
import axios from "axios";

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

function Home() {

  const [cards, setcards] = useState([]);

  useEffect(() => {
    const fetchCards = () => {
      axios
        .get(`${url}/homeCategories`)
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
              <nav className="navbar navbar-light homeCategoryNavbar">
                <div className="container-fluid">
                  <h4 className="categoryName">Home</h4>
                </div>
              </nav>
              <Link
                to={`/singleHome/${card._id}`}
                style={{ textDecoration: 'none', color: 'inherit' }}
              >
                <HomeCard card={card}/>
              </Link>
            </div>
        );
      })}
    </div>
  );
}

export default Home;
