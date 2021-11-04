import React from 'react'
import { Link } from 'react-router-dom'
import CategoryCard from '../../components/categoryCard'
import shShoppingImage from "./SecondHandShopping/secondHandShoppingImage.jpg";

const ShoppingCard = (props) => {
    return (
        <div className="container-fluid cardsList">
            <div className="row">
                <div className="col-md-3 card1">
                <Link to="/shopping/secondHandShopping" className="shShoppingCardLink">
                   <CategoryCard
                     cardName={props.card.title}
                     cardText="Every item purchased second hand means one less new one produced."
                     cardImageLink={shShoppingImage}
                   />
                </Link>
                </div>
            </div>
        </div>
    )
}

export default ShoppingCard;
