import React, { Fragment, useState } from 'react'
import { Link } from 'react-router-dom'


const Register = ({ setAuth }) => {

  const [input, setInput] = useState({
    email: '',
    name: '',
    pass: ''
  })

  const { email, name, pass } = input

  const onChange = (e) => {
    setInput({ ... input, [e.target.name]: e.target.value })
  }

  const onSubmit = async (e) => {
    e.preventDefault()

    try {
      const body = {email, name, pass}

      const response = await fetch('https://vosse.pw/auth/signup',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })

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
      <div className='auth-card mt-5'>
        <div className='mb-5 bold-text'>Create your Contacts account</div>
          <form onSubmit={onSubmit}>
            <div class="form-group mb-4">
              <label htmlFor="exampleInputEmail1">Email address</label>
              <input
                type="email"
                className="form-control"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                name="email"
                value={email}
                placeholder="name@company.com"
                onChange={(e) => onChange(e)}
                />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="username">Username</label>
              <input
                type="text"
                className="form-control"
                name="name"
                placeholder="username"
                value={name}
                onChange={(e) => onChange(e)}
                />
            </div>
            <div className="form-group mb-4">
              <label htmlFor="exampleInputPassword1">Password</label>
              <input
                type="password"
                className="form-control"
                id="exampleInputPassword1"
                name="pass"
                placeholder="********"
                value={pass}
                onChange={(e) => onChange(e)}
                />
            </div>
            <button type="submit" className="outline-del bold-text mt-2 mb-2 center crimson btn">Continue</button>
          </form>
        </div>
      <div className='font-s mt-3 center text-center'>Have an account? <Link className='bold-text cornflowerblue' to='/login'>Sign In</Link></div>
    </Fragment>
  )
}

export default Register
