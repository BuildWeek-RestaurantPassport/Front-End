import React, { useContext, useEffect, useState } from 'react';
import PassportContext from '../../contexts/passportContext';
import { Link, NavLink, useHistory } from 'react-router-dom';

const Navigation = () => {

    const { cityData, setCityData } = useContext(PassportContext);
    const [cityLength, setCityLength] = useState(cityData.length);
    const history = useHistory();

    const logout = event => {
        event.preventDefault();

        localStorage.removeItem('token');
        setCityData([]);
        history.push('/login');
    }

    useEffect(() => {
        setCityLength(cityData.length);
    }, [cityData])


    return (
        <div className='navigation'>
            <div className='logo'>Restaurant Passport</div>
            <div className='nav-links'>
                <NavLink to='/passport'>
                    My Passport <span>{cityLength}</span>
                </NavLink>
                {localStorage.getItem('token') ? <Link onClick={logout} className='btn btn-outline-primary'>Log Out</Link> : <Link className='btn btn-outline-primary' to='/registration'>Try it FREE</Link>}
            </div>
        </div >
    );
};

export default Navigation;