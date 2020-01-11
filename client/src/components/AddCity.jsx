import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PassportContext from '../contexts/passportContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from "styled-components";

const Container = styled.div`
    max-width: 50rem;
    margin-left: auto;
    margin-right: auto;
    padding-top: 1.5rem;
    padding-botton: 1.5rem;
`

const AddCity = props => {
    const [city, setCity] = useState({
        name: ""
    });

    const { cityData, setCityData } = useContext(PassportContext);

    const history = useHistory();

    const handleChange = event => {
        setCity({
            ...city,
            [event.target.name]: event.target.value
        });
    };

    function handleSubmit(event) {
        event.preventDefault();

        const payload = {
            name: city.name
        }

        axiosWithAuth()
            .post('/cities', payload)
            .then(() => {
                setCityData([...cityData, city.name])
                history.push('/passport')
            })
            .catch(error => console.log(`error: ${error}`));
    }

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit} className="js-focus-state input-group">
                    <input
                        className="form-control"
                        name="name"
                        type="text"
                        placeholder="Add a city"
                        aria-label="Add a city"
                        value={city.name}
                        onChange={handleChange}
                    />
                    <div className="input-group-append">
                        <button className="btn btn-primary" type="submit">
                            Add
                        </button>
                    </div>
                </form>
            </Container>

        </>
    );
};

export default AddCity;
