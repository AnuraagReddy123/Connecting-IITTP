import axios from "axios";
import React, { useEffect, useState } from "react";
import "./singlefood.css";

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

function SingleFood({match}) {

    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchCard = () => {
            axios
                .get(`${url}/foodCategories/${match.params.id}`)
                .then((res) => {
                setCard(res.data);
                    console.log(card);
                })
                .catch((err) => {
                    console.log(err);
                });
        };
        fetchCard();
    }, []);

  return (
    <div>
      <nav className="navbar navbar-light foodWasteNavbar">
        <div className="container-fluid">
          <span className="subCategoryName">{card && card.title}</span>
        </div>
      </nav>

      <div className="container-fluid foodWasteContainer">
        <div className="row">
          <div className="col-md-7">
            <div className="card shadow rounded foodWasteTips">
              <div className="card-body">
                <h4 style={{color: "green", fontFamily: "monospace"}}>Tips</h4>
                <hr></hr>
                <ul>
                    {card && card.tips.map((tip) => {
                        return <li key={tip}><p className="foodWasteContent">{tip}</p></li>
                    })}
                </ul>
              </div>
            </div>
          </div>

          <div className="col-md-5">
            <div className="card shadow rounded foodWasteImpacts">
              <div className="card-body">
                <h4 style={{color: "red", fontFamily: "monospace"}}>Impacts</h4>
                <hr></hr>
                <ul>
                    {card && card.impacts.map((impact) => {
                        return <li key={impact}><p className="foodWasteContent">{impact}</p></li>
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SingleFood;
