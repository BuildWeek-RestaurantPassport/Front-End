import React, {useState, useEffect} from 'react'
import * as Yup from 'yup'
import { Link } from 'react-router-dom'
import { Button, Grid } from 'semantic-ui-react'
import { Form, Field, withFormik } from 'formik'


const LogIn = ({errors, touched, status, history }) => {

    

    const registerLink = (
        <Link to='/register' className='register-link'>Register</Link>
      )
    return (
        <>
          <AppHeader
           Navigation/>
          <LoginContainer>
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

                    <Button type='submit' content= 'Login'/>

                  </Form>
                </Grid.Column>
                <p> {registerLink} </p>
              </Grid.Column>
            </Grid>
          </LoginContainer>
        </>
      )
    }
      
    const LoginPage= withFormik({
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