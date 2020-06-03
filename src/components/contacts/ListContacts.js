import React, { Fragment, useState, useEffect } from 'react'
import { Link } from 'react-router-dom'


const ListContacts = ({ setContactsChange, allContacts }) => {

  const [contacts, setContacts] = useState([])

  const deleteContact = async(id) => {
    try {
      const deleteContact = await fetch(
        `http://localhost:5000/contacts/delete/${id}`,
        {
          method: 'DELETE',
          headers: {
            jwt_token: localStorage.token
          }
        }
      )
      setContacts(contacts.filter( (contact) => contact.contact_id !== id ))
      setContactsChange(true)
    } catch (err) {
      console.error(err.message)
    }
  }

  useEffect( () => {
    setContacts(allContacts)
  }, [allContacts])

  if (contacts.length !== 0 && contacts[0].contact_id !== null) {
    return (
    <div className='contacts-table'>
      <table className="mt-5 table table-borderless">
    <thead>
      <tr>
        <th className='mr-2 th-style' scope="col">Name</th>
        <th className='email mr-2 th-style' scope="col">Email</th>
        <th className='mr-2 th-style' scope="col">Number</th>
      </tr>
    </thead>
    <tbody>
      {
        contacts.length !== 0 && contacts[0].contact_id !== null && contacts.map((contact) => (
        <tr key={contact.contact_id}>
          <td className='mr-2 th-style'>{contact.contact_first_name} {contact.contact_last_name}</td>
          <td className='email mr-2 th-style'>{contact.contact_email}</td>
          <td className='mr-2 th-style'>{contact.contact_number}</td>
        </tr>
      ))}


    </tbody>
  </table>
    </div>
  )} else {
    return (
      <Fragment>
        <div className="jumbotron mt-5 shadows">
          <h1 className="display-4">Hello! </h1>
          <p className="lead">This is a simple React application I made for storing all your contacts.</p>
          <p>It uses Express & PostgreSQL for storing and retrieving data.</p>
          <p>API is publicly available on my <a className='cornflowerblue' href='http://www.github.com/vosse'>github</a></p>
          <p>You can reach me at <a className='cornflowerblue' href='mailto:relja.jovicevic@gmail.com'>relja.jovicevic@gmail.com</a></p>
          <Link className="btn cfb-bg text-white btn-lg" to="/new" role="button">Create contact</Link>
        </div>
      </Fragment>
    )}
}

export default ListContacts
