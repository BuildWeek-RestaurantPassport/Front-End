import React from 'react';
import { useParams } from 'react-router-dom';
import axiosWithAuth from '../../utils/axiosWithAuth';
import PassportContext from '../contexts/PassportContext';

const Restaurant = (props) => {
    const { removeItem } = useContext(PassportContext);

    const params = useParams();

    const fetchRestaurant = () => {
        axiosWithAuth()
            .get(`/cities/restaurant/${params.id}`)
            .then(() => {

            })
            .catch(error => console.log("Error", error))
    };

    return (
        <div className="card-container">

            <h1 className="title">{props.restaurant.name}</h1>

            <address className="address">
                <span>{props.restaurant.address}</span>
                <span>{props.restaurant.city}</span>
            </address>

            <button onClick={() => removeItem(props.id)}>
                Remove from passport
			</button>
        </div>
    );
};

export default Restaurant;