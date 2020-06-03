import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'


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

    //const body = JSON.stringify({ email, pass })
       const body = { email, pass }


    try {

      //const response = await axios.post("http://localhost:5000/auth/login", body, config)
        const response = await fetch(
          'http://localhost:5000/auth/login',
          {
            method: "POST",
            headers: {
              'Content-type': 'application/json'
            },
            body: JSON.stringify(body)
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
            <div className="form-group mb-4">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                className="form-control"
                aria-describedby="emailHelp"
                type="text"
                name="email"
                value={email}
                onChange={(e) => onChange(e)}
                />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                name="pass"
                className="form-control"
                type="password"
                value={pass}
                onChange={(e) => onChange(e)}
                />
            </div>
            <button type="submit" className="outline-del bold-text mt-2 mb-2 center crimson btn">Continue</button>
          </form>
        </div>
      <div className='font-s mt-3 center text-center'>Don't have an account? <Link className='bold-text cornflowerblue' to='/signup'>Sign Up</Link></div>
    </Fragment>
  )
}


export default Login
