import axios from 'axios'

const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

   return axios.create({
       baseURL: 'https://node-server-rest-passport.herokuapp.com/',
       headers: {
           Authorization: token 
       }
   });

};

export default axiosWithAuth;