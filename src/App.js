import React, { Fragment, useState, useEffect } from 'react'
import  { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

// components
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/contacts/Dashboard'


function App() {



  const checkAuth = async () => {
    try {
      const res = await fetch('http://161.35.201.113:5000/auth/verify', {
        method: 'POST',
        headers: {
          jwt_token: localStorage.token
        }
      })
      const parseRes = await res.json()

      parseRes === true ? setIsAuth(true) : setIsAuth(false)
    } catch (err) {
      console.error(err.message)
    }
  }



  useEffect( () => {
    checkAuth()
  }, [])

  const [isAuth, setIsAuth] = useState(false)

  const setAuth = (boolean) => {
    setIsAuth(boolean)
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/contacts' render={ (props) => !isAuth ? <Redirect to='/login'/> : (<Dashboard {...props}/>) } />
          <Route exact path='/login' render={ (props) => !isAuth ? (<Login {...props} setAuth={setAuth} />) : <Redirect to='/contacts' /> }></Route>
          <Route exact path='/signup' render={ (props) => !isAuth ? (<Register {...props} setAuth={setAuth} />) : <Redirect to='/contacts' /> }></Route>

        </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
