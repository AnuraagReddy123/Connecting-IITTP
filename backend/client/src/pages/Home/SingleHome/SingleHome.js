import axios from 'axios';
import React, { useEffect, useState } from 'react';
import './singlehome.css';

// component for displaying a single home category page
const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

const SingleHome = ({match}) => {

    const [card, setCard] = useState(null);

    useEffect(() => {
        const fetchCard = () => {
            axios
                .get(`${url}/homeCategories/${match.params.id}`)
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
          <nav className="navbar navbar-light compostingNavbar">
            <div className="container-fluid">
              <span className="subCategoryName">{card && card.title}</span>
            </div>
          </nav>
    
          <div className="container-fluid compostingContainer">
            <div className="row">
              <div className="col-md-7">
                <div className="card shadow rounded compostingTips">
                  <div className="card-body">
                    <h4 style={{color: "green", fontFamily: "monospace"}}>Tips</h4>
                    <hr></hr>
                    <ul>
                        {card && card.tips.map((tip) => {
                            return <li key={tip}><p className="compostingContent">{tip}</p></li>
                        })}
                    </ul>
                  </div>
                </div>
              </div>
    
              <div className="col-md-5">
                <div className="card shadow rounded compostingImpacts">
                  <div className="card-body">
                    <h4 style={{color: "blue", fontFamily: "monospace"}}>Benefits</h4>
                    <hr></hr>
                    <ul>
                        {card && card.impacts.map((impact) => {
                            return <li key={impact}><p className="shShoppingContent">{impact}</p></li>
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

export default SingleHome
