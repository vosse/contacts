import React, { Fragment, useState, useEffect } from 'react'


const ListContacts = ({ setContactsChange, allContacts }) => {

  const [contacts, setContacts] = useState([])

  const deleteContact = async(id) => {
    try {
      const deleteContact = await fetch(
        `http://161.35.201.113:5000/contacts/delete/${id}`,
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

  return (
    <div className='contacts-table'>
      <table class="mt-5 table table-borderless">
    <thead>
      <tr>
        <th className='mr-2' scope="col">First</th>
        <th className='mr-2' scope="col">Last</th>
        <th className='mr-2' scope="col">Email</th>
        <th className='mr-2' scope="col">Number</th>
        <th className='mr-2' scope="col">Favorite</th>
      </tr>
    </thead>
    <tbody>
      {contacts.length !== 0 && contacts[0].contact_id !== null && contacts.map(contact => (
        <tr key={contact.contact_id}>
          <td>{contact.contact_first_name}</td>
          <td>{contact.contact_last_name}</td>
          <td>{contact.contact_email}</td>
          <td>{contact.contact_number}</td>
          <td>{contact.contact_favorite}</td>
        </tr>
      ))}


    </tbody>
  </table>
    </div>
  )
}

export default ListContacts
