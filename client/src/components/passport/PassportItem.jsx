import React from 'react';

const PassportItem = props => {
    return (
        <div className="card-container">

            <h1 className="title">{props.city.name}</h1>

            <button to='/restaurants'>
                View restaurants
			</button>
        </div>
    );
};

export default PassportItem;