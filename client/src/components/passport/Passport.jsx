import React from 'react';

import Item from './PassportItem';

const Passport = () => {

    <div>
        {passport.map(restaurant => (
            <Item
                key={item.id}
                restaurant={restaurant}
                removeItem={removeItem}
            />
        ))}
    </div>
};

export default Passport;