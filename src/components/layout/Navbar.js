import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = ({ isAuth, setAuth }) => {

  const logout = (e) => {
    setAuth(false)
    localStorage.removeItem('token')
  }


  const guestLinks = (
    <div className="navbar-nav">
      <a className="nav-item nav-link" href="/login">Sign In</a>
      <a className="nav-item nav-link" href="/signup">Sign Up</a>
    </div>
  )

  const authLinks = (
    <div className='navbar-nav'>
      <Link className='nav-item nav-link' to='/new' >New contact</Link>
      <Link onClick={e => logout(e)} className="cursor nav-item nav-link">Logout</Link>
    </div>
  )

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">
        <div id='pic'  className="d-inline-block align-top ml-3" ></div>
        <div className='ml-3 d-inline-block'>Contacts</div>
      </a>
      <button className="outline-del navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
        <div className="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
          { isAuth ? authLinks : guestLinks }
        </div>
    </nav>
  )
}
// alt="contacts" loading='lazy'  width="30" height="30"
/*    <div class="navbar-nav d-flex flex-row-reverse mr-3">
      <a class="nav-item nav-link" href="/login">Sign In</a>
      <a class="nav-item nav-link" href="/signup">Sign up</a>
    </div>  */
export default Navbar
