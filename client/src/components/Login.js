import React, { useState } from "react"
import { connect } from 'react-redux'
import { withRouter } from 'react-router-dom'
import { login } from '../components/actions'

function Login(props) {

  const [creds, setCreds] = useState({})

  const handleChange = e => {
    setCreds({
      ...creds,
      [e.target.name]: e.target.value
    })
  }

  const onSubmit = e => {
    e.preventDefault()
    props.login(creds, props.history)
  }

  return (
    <>
      <div className='form-container'>
        <h2>Login</h2>
        <form onSubmit={onSubmit}>
          <div className="form-group">
            <input className="form-control" type="text" name="username" placeholder="username" value={creds.username} onChange={handleChange}></input>
          </div>
          <div className="form-group">
            <input className="form-control" type="password" name="password" placeholder="password" value={creds.password} onChange={handleChange}></input>
          </div>
          <button className="btn btn-primary" type="submit"> Log In </button>

        </form>

      </div>

    </>
  )
}

const mapStateToProps = state => ({
  loginError: state.loginError
})

export default connect(
  mapStateToProps,
  { login }
)(withRouter(Login))




/*import React, { useState, useEffect } from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik'


const LogIn = ({ errors, touched, status, history }) => {



  const registerLink = (
    <Link to='/register' className='register-link'>Register</Link>
  )
  return (
    <>
      <div className="login-container">
        <Grid className="log-in-form">
          <Grid.Column>
            <h1>Login</h1>
            <Grid.Column>
              <Form>
                <Field
                  component='input'
                  type='text'
                  name='username'
                  placeholder='User Name'
                />
                {touched.username && errors.username && <p className='error'>{errors.username}</p>}
                <Field
                  component='input'
                  type='password'
                  name='password'
                  placeholder='Password'
                />
                {touched.password && errors.password && <p className='error'>{errors.password}</p>}

                <Button type='submit' content='Login' />

              </Form>
            </Grid.Column>
            <p> {registerLink} </p>
          </Grid.Column>
        </Grid>
      </div>
    </>
  )
}

const LoginPage = withFormik({
  mapPropsToValues({ username, password }) {
    return {
      username: username || "",
      password: password || "",
    }
  },
  validationSchema: Yup.object().shape({
    username: Yup.string().required("Cannot be an empty field"),
    password: Yup.string().required("Cannot be an empty field")
  }),
  handleSubmit(values, { setStatus, resetForm }) {
    setStatus(values)
    resetForm()
  }
})(LogIn)



export default LoginPage;
*/