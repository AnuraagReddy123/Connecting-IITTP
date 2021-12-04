import React from 'react';
import './home.css';
import compostingImage from "./compostingImage.jpg";
import CategoryCard from '../../components/categoryCard';

const HomeCard = (props) => {
    return (
        <div className="container-fluid cardsList">
            <div className="row">
                <div className="col-md-3 card1">
                    <CategoryCard
                        cardName={props.card.title}
                        cardText={props.card.text}
                        cardImageLink={compostingImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default HomeCard
