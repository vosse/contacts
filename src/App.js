import React, { Fragment, useState, useEffect } from 'react'
import  { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'
import axios from 'axios'

// components
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Contacts from './components/contacts/Contacts'


function App() {

  const [isAuth, setIsAuth] = useState(false)

  const setAuth = (boolean) => {
    setIsAuth(boolean)
  }

  const checkAuth = async () => {
    try {

      // const config = {
      //   headers: {
      //     jwt_token: localStorage.token
      //   }
      // }

    //  const res = await axios.get('http://localhost:5000/auth/verify', config)
      const res = await fetch('http://localhost:5000/auth/verify', {
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

  return (
    <div className="App">
      <BrowserRouter>
        <Fragment>
        <Navbar />
        <Switch>
          <Route exact path='/login' render={ (p) => !isAuth ? <Login {...p} setAuth={setAuth} /> : <Redirect to='/contacts' /> }></Route>
          <Route exact path='/signup' render={ (p) => !isAuth ? <Register {...p} setAuth={setAuth} /> : <Redirect to='/contacts' /> }></Route>
          <Route exact path='/contacts' render={ (p) => !isAuth ? <Redirect to='/login'/> : <Contacts />} />
        </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
