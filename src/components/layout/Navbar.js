import React, { Fragment } from 'react'


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#">
        <div id='pic'  className="d-inline-block align-top ml-3" ></div>
        <div className='ml-3 d-inline-block'>Contacts</div>
      </a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
        <div class="collapse navbar-collapse flex-row-reverse" id="navbarNavAltMarkup">
          <div class="navbar-nav">
            <a class="nav-item nav-link" href="/login">Sign In</a>
            <a class="nav-item nav-link" href="/signup">Sign Up</a>
          </div>
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
