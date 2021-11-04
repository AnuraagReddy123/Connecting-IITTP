import axios from "axios";
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import CategoryCard from "../../components/categoryCard";
import SecondHandShopping from "./SecondHandShopping/secondHandShopping";
import "./shopping.css"
import ShoppingCard from "./ShoppingCard";
import shoppingCard from "./ShoppingCard";

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
    // <Router>
    //   <Switch>
    //     <Route
    //       exact
    //       path="/shopping"
    //       render={() => (
    //         <div>
    //           <nav className="navbar navbar-light shoppingNavbar">
    //             <div className="container-fluid">
    //               <h4 className="categoryName">Shopping</h4>
    //             </div>
    //           </nav>
    //           <div className="container-fluid cardsList">
    //             <div className="row">
    //               <div className="col-md-3 card1">
    //                 <Link to="/shopping/secondHandShopping" className="shShoppingCardLink">
    //                   <CategoryCard
    //                     cardName="Second-Hand Shopping"
    //                     cardText="Every item purchased second hand means one less new one produced."
    //                     cardImageLink={shShoppingImage}
    //                   />
    //                 </Link>
    //               </div>
    //             </div>
    //           </div>
    //         </div>
    //       )}
    //     />
    //     <Route exact path="/shopping/secondHandShopping" render={() => <SecondHandShopping/>} />
    //   </Switch>
    // </Router>
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
