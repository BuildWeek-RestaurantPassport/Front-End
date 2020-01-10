import React, { useState, useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import { Rating } from 'semantic-ui-react';

const Restaurant = (props) => {

    const [rating, setRating] = useState({ rating: props.restaurant.rating, maxRating: 5 });
    console.log(props.restaurant)
    const history = useHistory();
    const params = useParams();


    const removeRestaurant = event => {
        event.preventDefault();

        axiosWithAuth()
            .delete(`/cities/restaurants/${props.restaurant.restID}`)
            .then(() => {
                props.getRestaurants();
                history.push(`/cities/${params.id}`);
            })
            .catch(error => console.log("Unable to delete restaurant", error.message));
    };

    const onRate = (event, stats) => {
        setRating({ rating: stats.rating, maxRating: stats.maxRating })
    }

    useEffect(() => {
        if (rating.rating) {
            axiosWithAuth()
                .put(`/cities/restaurants/${props.restaurant.restID}`, { rating: rating.rating })
                .then(res => console.log(res.data))
                .catch(error => console.log("Unable to delete restaurant", error.message));
        }
    }, [rating.rating]);

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{props.restaurant.restName}</h1>

                <address className="address">
                    <span>{props.restaurant.address}</span>
                    <span>{props.restaurant.city}</span>
                </address>

                <p>{props.restaurant.description}</p>

                <Rating className="rating" icon='star' rating={rating.rating} onRate={onRate} maxRating={5} />

                <button className="btn btn-primary" onClick={removeRestaurant}>
                    Remove from Passport
			</button>
            </div>
        </div>
    );
};

export default Restaurant;