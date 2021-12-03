import React from 'react'
import CategoryCard from '../../components/categoryCard'
import travelImage from "./vechile/travelling.jpg"

const FoodCard = (props) => {
    return (
        <div className="container-fluid cardsList">
            <div className="row">
                <div className="col-md-3 card1">
                    <CategoryCard
                        cardName={props.card.title}
                        cardText={props.card.text}
                        cardImageLink={travelImage}
                    />
                </div>
            </div>
      </div>
    )
}

export default FoodCard
