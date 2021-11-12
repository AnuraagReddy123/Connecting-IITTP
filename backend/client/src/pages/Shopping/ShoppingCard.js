import React from 'react'
import CategoryCard from '../../components/categoryCard'
import shShoppingImage from "./SingleShopping/secondHandShoppingImage.jpg";

const ShoppingCard = (props) => {
    return (
        <div className="container-fluid cardsList">
            <div className="row">
                <div className="col-md-3 card1">
                    <CategoryCard
                        cardName={props.card.title}
                        cardText={props.card.text}
                        cardImageLink={shShoppingImage}
                    />
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard;
