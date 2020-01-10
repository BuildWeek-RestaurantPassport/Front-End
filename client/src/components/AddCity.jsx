import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import PassportContext from '../contexts/passportContext';
import axiosWithAuth from '../utils/axiosWithAuth';
import styled from "styled-components";

const Container = styled.div`
    display:flex;
    align-items: center;
    background: #fafafa;
    width: 100%;
    margin: 0 auto;
    padding: 10px 10px;
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
                <form onSubmit={handleSubmit}>
                    <div className="form-group add-city">
                        <input
                            name="name"
                            type="text"
                            placeholder="Add a city"
                            value={city.name}
                            onChange={handleChange}
                        />
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
