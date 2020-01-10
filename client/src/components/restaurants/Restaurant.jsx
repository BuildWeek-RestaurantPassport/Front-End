import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';

const Restaurant = (props) => {

    const history = useHistory();
    const params = useParams();

    const removeRestaurant = event => {
        event.preventDefault();

        axiosWithAuth()
            .delete(`/cities/restaurants/${params.id}`)
            .then(() => {
                history.push(`/cities/${params.id}/restaurants`);
            })
            .catch(error => console.log("Unable to delete restaurant", error.message));
    };

    return (
        <div className="card-container">

            <h1 className="title">{props.restaurant.name}</h1>

            <address className="address">
                <span>{props.restaurant.address}</span>
                <span>{props.restaurant.city}</span>
            </address>

            <button onClick={removeRestaurant}>
                Remove from passport
			</button>
        </div>
    );
};

export default Restaurant;