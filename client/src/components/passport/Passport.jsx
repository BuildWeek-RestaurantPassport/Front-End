import React, { useState, useEffect, useContext } from "react";
import PassportContext from '../../contexts/passportContext';
import axiosWithAuth from "../../utils/axiosWithAuth";
import styled from 'styled-components';
import City from './PassportItem';

const Container = styled.div`
    margin-top: 1rem;
    text-align:center;
`

const Cities = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;
margin: 0 1rem;
`

const Passport = (props) => {
    const { getCities, cityData } = useContext(PassportContext);

    useEffect(() => {
        getCities();
    }, [cityData])

    return (
        <>
            <Container>
                <h2>My Passport</h2>
                {cityData.length
                    ? <Cities>
                        {cityData.length && cityData.map(city => (
                            <City
                                key={city.id}
                                {...city}
                            />
                        ))}
                    </Cities>

                    : <p>You have not added any cities to your passport yet.</p>
                }
            </Container>
        </>
    );
};


export default Passport;