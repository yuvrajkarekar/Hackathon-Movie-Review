import React, { useState } from 'react'
import './Login.css'
import { toast } from 'react-toastify'
import { login } from '../../services/users'
import { Link, useNavigate } from 'react-router-dom'

import { useAuth } from '../../providers/useAuth'


function Login() {
  // add the state members for inputs
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  // get the user from AuthContext
  const { setUser } = useAuth()

  // get navigate function reference
  const navigate = useNavigate()

  // click event handler of Login button
  const onLogin = async () => {
    if (email.length == 0) {
      toast.warning('please enter email')
    } else if (password.length == 0) {
      toast.warning('please enter password')
    } else {
      const response = await login(email, password)
      if (response['status'] == 'success') {
        toast.success('login successful')

        // get the token from response and cache it in local storage
        localStorage.setItem('token', response['data']['token'])
        localStorage.setItem('first_name', response['data']['first_name'])
        localStorage.setItem('last_name', response['data']['last_name'])

        // set the logged in user information
        setUser({
          first_name: response['data']['first_name'],
          last_name: response['data']['last_name'],
        })

        // navigate to the PropertyListing page
        navigate('/movie')
      } else {
        toast.error(response['error'])
      }
    }
  }

  return (
    <div className='container'>
      <h2 className='page-header'>Login</h2>

      <div className='login-container'>
        <div className='mb-3'>
          <label htmlFor=''>Email</label>
          <input
            onChange={(e) => {
              setEmail(e.target.value)
            }}
            type='email'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <label htmlFor=''>Password</label>
          <input
            onChange={(e) => {
              setPassword(e.target.value)
            }}
            type='password'
            className='form-control'
          />
        </div>
        <div className='mb-3'>
          <input
            type='checkbox'
            className='me-2'
          />
          <label htmlFor=''>Remember me</label>
        </div>
        <div className='mb-3'>
          {/* <button className='btn btn-link'>Forgot password?</button> */}
          Don't have an account yet? <Link to='/register'>Register here</Link>
        </div>
        <div className='mb-3'>
          <button
            onClick={onLogin}
            className='btn btn-success'
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}

export default Login
