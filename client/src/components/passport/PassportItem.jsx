import React from 'react';
import Rating from '../rating/Rating';
import PassportForm from './PassportForm';

const PassportItem = props => {
    return (
        <div className="restaurant">

            <h1 className="title">{props.restaurant.title}</h1>

            <address className="address">
                <span>{props.restaurant.street}</span>
                <span>{props.restaurant.city}</span>
            </address>

            <Rating />
            <PassportForm />

            <button onClick={() => props.removeItem(props.restaurant)}>
                Remove from passport
			</button>
        </div>
    );
};

export default PassportItem;