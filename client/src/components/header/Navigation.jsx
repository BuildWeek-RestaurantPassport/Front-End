import React from 'react';
import { NavLink } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <div className='navigation'>
            <div className='logo'>Restaurant Passport</div>
            <div className='nav-links'>
                <NavLink to='/'>Restaurants</NavLink>
                <NavLink to='/passport'>
                    My Passport <span>{props.length}</span>
                </NavLink>
                <button className='btn btn-outline-primary'>Try it FREE</button>
            </div>
        </div>
    );
};

export default Navigation;