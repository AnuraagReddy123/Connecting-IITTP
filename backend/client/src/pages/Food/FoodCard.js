import React from 'react'
import CategoryCard from '../../components/categoryCard'
import foodWasteImage from "./ReduceFoodWasteAtHome/foodWasteImage.jpg"

const FoodCard = (props) => {
    return (
        <div className="container-fluid cardsList">
            <div className="row">
                <div className="col-md-3 card1">
                    <CategoryCard
                        cardName={props.card.title}
                        cardText={props.card.text}
                        cardImageLink={foodWasteImage}
                    />
                </div>
            </div>
      </div>
    )
}

export default FoodCard
