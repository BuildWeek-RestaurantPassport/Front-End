import React from 'react';

const Restaurant = props => {
    return (
        <div className="restaurant">

            <h1 className="title">{props.restaurant.title}</h1>

            <address className="address">
                <span>{props.restaurant.address}</span>
                <span>{props.restaurant.city}</span>
            </address>

            <button onClick={() => props.addItem(props.restaurant)}>
                Add to passport
			</button>
        </div>
    );
};

export default Restaurant;