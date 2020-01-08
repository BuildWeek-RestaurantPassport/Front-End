import React from 'react';

import Restaurant from './Restaurant';

const Restaurants = () => (
    <div>
        {restaurants.map(restaurant => (
            <Restaurant
                key={restaurant.id}
                restaurant={restaurant}
                addItem={addItem}
            />
        ))}
    </div>
);
export default Restaurants;