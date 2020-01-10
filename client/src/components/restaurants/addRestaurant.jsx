import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../../utils/axiosWithAuth';

const AddRestaurant = props => {
    const { register, handleSubmit, errors } = useForm();
    const history = useHistory();
    const params = useParams();

    const onSubmit = async data => {

        const payload = {
            name: data.name,
            city: data.city,
            address: data.address,
            description: data.description,
            city_id: params.id
        }

        axiosWithAuth()
            .post('/cities/restaurants', payload)
            .then(() => {
                history.push(`/cities/${params.id}`);
            })
    }

    return (
        <div className='form-container'>
            <h2>Add Restaurant</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className='form-group'>
                    <label htmlFor='name'>Name</label>
                    <input
                        className='form-control'
                        type='text'
                        name='name'
                        ref={register({ required: true, })} />
                    {errors.name && 'Restaurant name is required'}
                </div>
                <div className='form-group'>
                    <label htmlFor='address'>Address</label>
                    <input
                        className='form-control'
                        name='address'
                        ref={register({ required: true, })} />
                    {errors.name && 'Restaurant address is required'}
                </div>
                <div className='form-group'>
                    <label htmlFor='description'>Description</label>
                    <input
                        className='form-control'
                        type='text'
                        name='description'
                        placeholder='American restaurant'
                        ref={register({ required: true, })} />
                    {errors.name && 'Restaurant description is required'}
                </div>
                <div className='form-group'>
                    <button className='btn btn-primary' type='submit'>Add</button>
                </div>
            </form>
        </div>
    )
}

export default AddRestaurant;