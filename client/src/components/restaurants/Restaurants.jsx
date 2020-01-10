import React, { useState, useEffect } from 'react';
import { Link, useParams } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import styled from 'styled-components';
import Restaurant from './Restaurant';

const Container = styled.div`
    margin-top: 1rem;
    text-align:center;
`

const RestaurantList = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    margin: 1rem 1rem;
`

const Restaurants = (props) => {
    const [restaurants, setRestaurants] = useState([]);
    const [city, setCity] = useState('');
    const params = useParams();

    const getRestaurants = () => {
        axiosWithAuth()
            .get(`/cities/${params.id}/restaurants`)
            .then(response => {
                setRestaurants(response.data.restaurants);
            })
            .catch(error => console.log(error.message));
    }

    useEffect(() => {
        axiosWithAuth()
            .get(`/cities/${params.id}`)
            .then(res => setCity(res.data))
            .catch(error => console.log(error.message));

        getRestaurants();

    }, [])

    return (
        <Container>
            <h2>{city.name}</h2>
            <Link to={`/cities/${params.id}/add-restaurant`} className="btn btn-primary">Add a restaurant</Link>
            <RestaurantList>
                {restaurants.map(restaurant => (
                    <Restaurant
                        key={restaurant.id}
                        restaurant={restaurant}
                        getRestaurants={getRestaurants}
                    />
                ))}
            </RestaurantList>
        </Container>
    )
};
export default Restaurants;