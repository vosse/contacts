import React, { useEffect, useState } from 'react'

// components
import ListContacts from './ListContacts'

const Dashboard = ({ setAuth, isAuth }) => {

  const [allContacts, setAllContacts] = useState([])
  const [contactsChange, setContactsChange] = useState(false)

  const getContacts = async() => {
    try {
      const res = await fetch(
        'https://vosse-contactsapi.glitch.me/contacts/',
        {
          method: 'GET',
          headers: {
            jwt_token: localStorage.token
          }
        }
      )

      const parseData = await res.json()
      //console.log(parseData)
      setAllContacts(parseData)
    } catch (err) {
      console.error(err.message)
    }
  }

  const logout = async(e) => {
    e.preventDefault()

    try {
      localStorage.removeItem('token')
      setAuth(false)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect( () => {
    getContacts()
    setContactsChange(false)
  }, [contactsChange])

  return (
        <div className='d-flex mt-3 justify-content-around'>
          <ListContacts setContactsChange={setContactsChange} allContacts={allContacts} />
        </div>
  )
}

export default Dashboard
