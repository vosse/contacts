import React, { Fragment, useState, useEffect } from 'react'
import  { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom'

// components
import Navbar from './components/layout/Navbar'
import Login from './components/auth/Login'
import Register from './components/auth/Register'
import Dashboard from './components/contacts/Dashboard'
import NewContact from './components/contacts/NewContact'


function App() {

  const checkAuth = async () => {
    try {
      const res = await fetch('https://vosse-contactsapi.glitch.me/auth/verify', {
        method: 'POST',
        headers: {
          jwt_token: localStorage.token,

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
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Fragment>
        <Navbar isAuth={isAuth} setAuth={setAuth}/>
        <Switch>
          <Route exact path='/new' render={ (props) => !isAuth ? (<Redirect to='/login' />) : (<NewContact />) } />
          <Route exact path='/' render={ (props) => !isAuth ? (<Redirect to='/signup'/>) : (<Dashboard isAuth={isAuth} {...props}/>) } />
          <Route exact path='/login' render={ (props) => !isAuth ? (<Login {...props} setAuth={setAuth} />) : (<Redirect to='/' />) }></Route>
          <Route exact path='/signup' render={ (props) => !isAuth ? (<Register {...props} setAuth={setAuth} />) : (<Redirect to='/' />) }></Route>
        </Switch>
        </Fragment>
      </BrowserRouter>
    </div>
  );
}

export default App;
