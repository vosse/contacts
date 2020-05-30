import React, { Fragment } from 'react'
import { Link } from 'react-router-dom'


const Register = () => {
  return (
    <Fragment>
      <div className='auth-card mt-5'>
        <div className='mb-5 bold-text'>Create your Contacts account</div>
          <form>
            <div class="form-group mb-4">
              <label for="exampleInputEmail1">Email address</label>
              <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
            </div>
            <div class="form-group mb-4">
              <label for="username">Username</label>
              <input type="text" class="form-control"/>
            </div>
            <div class="form-group mb-4">
              <label for="exampleInputPassword1">Password</label>
              <input type="password" class="form-control" id="exampleInputPassword1"/>
            </div>
            <button type="submit" class="bold-text mt-2 mb-2 center crimson btn">Continue</button>
          </form>
        </div>
      <div className='font-s mt-3 center text-center'>Have an account? <Link className='bold-text cornflowerblue' to='/login'>Sign In</Link></div>
    </Fragment>
  )
}

export default Register
