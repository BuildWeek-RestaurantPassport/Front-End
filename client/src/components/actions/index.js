import axios from 'axios';
import axiosWithAuth from '../../utils/axiosWithAuth';

export const LOGIN_START  = 'LOGIN_START'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_ERROR = 'LOGIN_ERROR'

export const login = (creds, history) => dispatch => {
    dispatch({ type: LOGIN_START })

    axios
    .post(`https://node-server-rest-passport.herokuapp.com/users/login`, creds)
    .then(res => {
        console.log(res)
        setTimeout(()=>{
            dispatch({ type: LOGIN_SUCCESS, payload: res.data})
            history.push('/passport')
        }, 1500)
    })
    .catch(error=>dispatch({ type: LOGIN_ERROR }))
};


export const REGISTER_START = 'REGISTER_START'
export const REGISTER_SUCCESS = 'REGISTER_SUCCESS'
export const REGISTER_ERROR = 'REGISTER_ERROR'

export const register = creds => dispatch => {

    dispatch({type: REGISTER_START})

    axios
    .post(`https://node-server-rest-passport.herokuapp.com/users/register`, creds)
    .then(res => {
        console.log(res)
      dispatch({type: REGISTER_SUCCESS, payload: res.data})
    })
    .catch(error => {
        dispatch({type: REGISTER_ERROR, payload: error})
    });
};