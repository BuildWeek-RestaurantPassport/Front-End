import React from 'react';

// Need to create/import card component for restaurant items

const NearbyRestaurants = () => (
    <div>
        <h3>Nearby Restaurants</h3>
        <ul>
            {nearbyRestaurants.map(restaurant => (
                <li>{restaurant}</li>
            ))}
        </ul>
    </div>
);
export default NearbyRestaurants;