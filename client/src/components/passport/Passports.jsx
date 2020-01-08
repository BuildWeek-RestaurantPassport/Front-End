import React from 'react';

import Restaurant from './Restaurant';

const myPassport = ({ passport }) => (
    <div>
        {passport.map(restaurant => (
            <Restaurant
                key={restaurant.id}
                restaurant={restaurant}
                removeItem={removeItem}
            />
        ))}
    </div>
);

export default myPassport;