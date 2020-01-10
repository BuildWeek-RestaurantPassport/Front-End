import React, { useState } from 'react';

import Restaurant from './Restaurant';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Restaurants = (props) => {
    const [restaurants, setRestaurants] = useState([]);

    return (
        <div>
            {
                restaurants.map(restaurant => (
                    <Restaurant
                        key={restaurant.id}
                        restaurant={restaurant}
                    />
                ))
            }
        </div>
    )
};
export default Restaurants;