import React from 'react';
import useForm from 'react-hook-form';

const PassportForm = (props) => {

    const { register, handleSubmit, errors } = useForm();

    return (

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className='form-group'>
                <label htmlFor='note'>Note</label>
                <input
                    className='form-control'
                    name='note'
                    placeholder='Add a note about this place?'
                    ref={register} />
            </div>
            <div className='form-group'>
                <button className='btn btn-primary' type='submit'>Save</button>
            </div>
        </form >

    );

}

export default PassportForm;