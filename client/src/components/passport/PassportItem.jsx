import React from 'react';
import { Link } from 'react-router-dom';

const PassportItem = props => {

    return (
        <div className="card">
            <div className="card-body">
                <h1 className="card-title">{props.name}</h1>
                <Link to={`/cities/${props.id}`} className="btn btn-primary">View Restaurants</Link>
            </div>
        </div>
    );
};

export default PassportItem;