import React, { Fragment, useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import axios from 'axios'


const Login = ({ setAuth }) => {

  const [input, setInput] = useState({
    email: "",
    pass: ""
  })

  const {email, pass} = input

  const onChange = (e) => {
    setInput({...input, [e.target.name]: e.target.value})
  }

  const onSubmit = async(e) => {

    e.preventDefault()

    const body = JSON.stringify({ email, pass })
      // const body = { email, pass }
    const config = {
       headers: {
         'Content-Type': 'application/json'
       }
     }


    try {

      //const response = await axios.post("http://localhost:5000/auth/login", body, config)
        const response = await fetch(
          'http://161.35.201.113:5000/auth/login',
          {
            method: "POST",
            headers: {
              'Content-Type': 'application/json'
            },
            body: body
          }
        )

      const parseRes = await response.json()

      if (parseRes.jwtToken) {
        localStorage.setItem('token', parseRes.jwtToken)
        setAuth(true)
      } else {
        setAuth(false)
      }
    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
      <div className='auth-card mt-5 min-width'>
        <div className='mb-5 bold-text'>Sign in to your account</div>
          <form onSubmit={onSubmit}>
            <div class="form-group mb-4">
              <label for="exampleInputEmail1">Email address</label>
              <input
                class="form-control"
                aria-describedby="emailHelp"
                type="text"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                />
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputPassword1">Password</label>
              <input
                name="pass"
                class="form-control"
                type="password"
                value={pass}
                onChange={(e) => onChange(e)}
                />
            </div>
            <button type="submit" class="bold-text mt-2 mb-2 center crimson btn">Continue</button>
          </form>
        </div>
      <div className='font-s mt-3 center text-center'>Don't have an account? <Link className='bold-text cornflowerblue' to='/signup'>Sign Up</Link></div>
    </Fragment>
  )
}


export default Login
