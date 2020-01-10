import React, { useState, useEffect } from "react";
import axiosWithAuth from "../../utils/axiosWithAuth";

import City from './PassportItem';

const Passport = (props) => {
    const [cityData, setCityData] = useState([]);

    useEffect(() => {
        axiosWithAuth()
            .get("/cities")
            .then(res => setCityData(res.data))
            .catch(err => console.log(err.message));
    }, []);

    return (
        <>
            <h2>My Passport</h2>
            <p>You have not added any cities to your passport yet.</p>
            <div className="passport-container">
                {cityData.map(city => (
                    <City
                        key={city.id}
                        {...city}
                    />
                ))}
            </div>
        </>
    );
};


export default Passport;