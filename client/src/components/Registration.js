import React, { useState, useEffect } from "react";
import { Link } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import axiosWithAuth from '../utils/axiosWithAuth';
import { Button } from "semantic-ui-react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import axios from "axios";
import * as Yup from "yup";

const Registration = (props) => {

  const [userRegistration, setUserRegistration] = useState({});
  const { register, handleSubmit, errors } = useForm();

  const onSubmit = async data => {
    if (data.password === data.confirmPassword) {


      const payload = {
        'username': data.username,
        'password': data.password,
        'email': data.email
      }

      console.log(payload)

      axiosWithAuth()
        .post("/users/register", payload)
        .then(response => {
          console.log("Account registered", response.data);
        })
        .catch(error => console.log(error));
    }
  };

  return (
    
    // <>

    //   <div className="login-container">
    //     <h1>Register</h1>
    //     <Form className="form">
    //       <Field
    //         className="field"
    //         component="input"
    //         type="text"
    //         name="username"
    //         placeholder="User Name"
    //       />
    //       <br /> <br />
    //       <ErrorMessage name="username" />
    //       <br /> <br />
    //       <Field
    //         className="field"
    //         component="input"
    //         type="password"
    //         name="password"
    //         placeholder="Password"
    //       />
    //       <br /> <br />
    //       <ErrorMessage name="password" />
    //       <br /> <br />
    //       <Field
    //         className="field"
    //         component="input"
    //         type="text"
    //         name="fullname"
    //         placeholder="Full Name"
    //       />
    //       <br /> <br />
    //       <ErrorMessage name="fullname" />
    //       <br /> <br />
    //       <Field
    //         className="field"
    //         component="input"
    //         type="text"
    //         name="city"
    //         placeholder="City"
    //       />
    //       <br /> <br />
    //       <ErrorMessage name="city" />
    //       <br /> <br />
    //       <Field
    //         className="field"
    //         component="input"
    //         type="email"
    //         name="email"
    //         placeholder="Email Address"
    //       />
    //       <br /> <br />
    //       <ErrorMessage name="email" />
    //       <br /> <br />

    //       <Button type="submit"> Register </Button>
    //       <br /> <br />
    //     </Form>
    //   </div>
    // </>

    <div className='form-container'>

      <h2>Register</h2>

      <form onSubmit={handleSubmit(onSubmit)}>

        <div className='form-group'>
          <label htmlFor='username'>Username</label>
          <input className='form-control' type='text' name='username' id='username' ref={register({ required: true })} />
          {errors.username && 'A username is required.'}
        </div>

        <div className='form-group'>
          <label htmlFor='email'>Email Address</label>
          <input className='form-control' type='email' name='email' id='email' ref={register({
            required: true, pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i, message: "An email address is required."
            }
          })} />
          {errors.email && errors.email.message}
        </div>

        <div className='form-group'>
          <label htmlFor='password'>Password</label>
          <input className='form-control' type='password' name='password' id='password' ref={register({ required: true, minLength: 4 })} />
          <label htmlFor='confirmPassword'>Confirm Password</label>
          <input className='form-control' type='password' name='confirmPassword' id='confirmPassword' ref={register({ required: true, minLength: 4 })} />
        </div>

        <div className='form-group'>
          <button className='btn btn-primary' type="submit">Create Account</button>
        </div>

      </form>

    </div>

  );

}

export default Registration;


// function Registration() {
// const LogIn = <a href="/log-in">Login</a>;
//   return (
//     <>

//       <div className="login-container">
//         <h1>Register</h1>
//         <Form className="form">
//           <Field
//             className="field"
//             component="input"
//             type="text"
//             name="username"
//             placeholder="User Name"
//           />
//           <br /> <br />
//           <ErrorMessage name="username" />
//           <br /> <br />
//           <Field
//             className="field"
//             component="input"
//             type="password"
//             name="password"
//             placeholder="Password"
//           />
//           <br /> <br />
//           <ErrorMessage name="password" />
//           <br /> <br />
//           <Field
//             className="field"
//             component="input"
//             type="text"
//             name="fullname"
//             placeholder="Full Name"
//           />
//           <Field
//             className="field"
//             component="input"
//             type="email"
//             name="email"
//             placeholder="Email Address"
//           />
//           <ErrorMessage name="email" />
//           <p>Already have an account? {LogIn}</p>
//           <Button type="submit"> Login </Button>
//           <br /> <br />
//         </Form>
//       </div>
//     </>
//   );
// }

// const FormikRegister = withFormik({
//   mapPropsToValues({ username, fullname, city, password, email }) {
//     return {
//       username: username || "",
//       fullname: fullname || "",
//       city: city || "",
//       password: password || "",
//       email: email || ""
//     };
//   },

//   validationSchema: Yup.object().shape({
//     username: Yup.string().required("Please enter a username."),
//     fullname: Yup.string().required("Please enter your full name."),
//     city: Yup.string().required("Please enter your city."),
//     email: Yup.string().required("Please enter your email address."),
//     password: Yup.string()
//       .min(6, "Password must be at least 6 chars.")
//       .required("Password is required.")
//   }),

//   handleSubmit(values, { setStatus, resetForm }) {
//     console.log("This is the data:", values);
//     setStatus(values);
//     resetForm();
//   }
// })(Registration);

// export default FormikRegister;
