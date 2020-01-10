import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
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
            .then(() => history.push('/passport'))
            .catch(error => console.log(`error: ${error}`));
    }

    return (
        <>
            <Container>
                <form onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
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
