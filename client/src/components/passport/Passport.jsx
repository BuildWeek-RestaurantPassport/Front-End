import React from 'react';

const myPassport = ({ passport }) => (
    <ul>
        {passport.map(item => (
            <li>{item}</li>
        ))}
    </ul>
);

export default myPassport;