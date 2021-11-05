import axios from 'axios';
import React, { useEffect, useState } from 'react'

const port = process.env.PORT || 4000;
let url = 'http://localhost:';
if (process.env.NODE_ENV === 'production')
  url = 'https://save-environment-iittp.herokuapp.com';
else url = `http://localhost:${port}`;

const SingleShoppingCard = ({match}) => {

    const [card, setCard] = useState({});

    useEffect(() => {
        const fetchCard = () => {
        axios
            .get(`${url}/shoppingCategories/${match.params.id}`)
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
            <nav className="navbar navbar-light shShoppingNavbar">
                <div className="container-fluid">
                <span className="subCategoryName">{card.title}</span>
                </div>
            </nav>

            <div className="container-fluid shShoppingContainer">
                <div className="row">
                    <div className="col-md-7">
                        <div className="card shadow rounded shShoppingTips">
                            <div className="card-body">
                                <h4 style={{color: "green", fontFamily: "monospace"}}>Tips</h4>
                                <hr></hr>
                                <ul>
                                    {card.tips.map((tip) => {
                                        return <li key={tip}><p className="shShoppingContent">{tip}</p></li>
                                    })}
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-5">
                        <div className="card shadow rounded shShoppingImpacts">
                            <div className="card-body">
                                <h4 style={{color: "red", fontFamily: "monospace"}}>Impacts</h4>
                                <hr></hr>
                                <ul>
                                    {card.impacts.map((impact) => {
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

export default SingleShoppingCard;
