import React, { useState, useEffect } from "react";
import { Button } from "semantic-ui-react";
import { withFormik, Form, Field, ErrorMessage } from "formik";
import styled from "styled-components";
import axios from "axios";
import * as Yup from "yup";

function Registration() {
  const LogIn = <a href="/log-in">Login</a>;
  return (
    <>
      <NavContainer></NavContainer>
      <RegisterContainer>
        <h1>Register</h1>
        <Form className="form">
          <Field
            className="field"
            component="input"
            type="text"
            name="username"
            placeholder="User Name"
          />
          <br /> <br />
          <ErrorMessage name="username" />
          <br /> <br />
          <Field
            className="field"
            component="input"
            type="password"
            name="password"
            placeholder="Password"
          />
          <br /> <br />
          <ErrorMessage name="password" />
          <br /> <br />
          <Field
            className="field"
            component="input"
            type="text"
            name="fullname"
            placeholder="Full Name"
          />
          <br /> <br />
          <ErrorMessage name="fullname" />
          <br /> <br />
          <Field
            className="field"
            component="input"
            type="text"
            name="city"
            placeholder="City"
          />
          <br /> <br />
          <ErrorMessage name="city" />
          <br /> <br />
          <Field
            className="field"
            component="input"
            type="email"
            name="email"
            placeholder="Email Address"
          />
          <br /> <br />
          <ErrorMessage name="email" />
          <br /> <br />
          <p>Already have an account? {LogIn}</p>
          <Button type="submit"> Login </Button>
          <br /> <br />
        </Form>
      </RegisterContainer>
    </>
  );
}

const FormikRegister = withFormik({
  mapPropsToValues({ username, fullname, city, password, email }) {
    return {
      username: username || "",
      fullname: fullname || "",
      city: city || "",
      password: password || "",
      email: email || ""
    };
  },

  validationSchema: Yup.object().shape({
    username: Yup.string().required("Please enter a username."),
    fullname: Yup.string().required("Please enter your full name."),
    city: Yup.string().required("Please enter your city."),
    email: Yup.string().required("Please enter your email address."),
    password: Yup.string()
      .min(6, "Password must be at least 6 chars.")
      .required("Password is required.")
  }),

  handleSubmit(values, { setStatus, resetForm }) {
    console.log("This is the data:", values);
    setStatus(values);
    resetForm();
  }
})(Registration);

export default FormikRegister;
