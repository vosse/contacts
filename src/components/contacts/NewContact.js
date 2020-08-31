import React, { Fragment, useState } from 'react'

const NewContact = ({ setContactChange }) => {

  const [inputs, setInputs] = useState({
    first_name: '',
    last_name: '',
    email: '',
    number: ''
  })

  const {
    first_name,
    last_name,
    email,
    number
  } = inputs

  const onChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value })
  }

  const onSubmit = async(e) => {
    e.preventDefault()

    const myHeaders = new Headers()
    myHeaders.append('Content-Type', 'application/json')
    myHeaders.append('jwt_token', localStorage.token)

    try {
      const body = {
        first_name,
        last_name,
        email,
        number
      }

      const res = await fetch(
        'https://vosse-contactsapi.glitch.me/contacts/new',
        {
          method: 'POST',
          headers: myHeaders,
          body: JSON.stringify(body)
        }
      )

      const parseRes = await res.json()
      console.log(parseRes)
      console.log(res)
      setInputs([])
      window.location = '/'

    } catch (err) {
      console.error(err.message)
    }
  }

  return (
    <Fragment>
    <div className='auth-card mt-5 min-width mb-5'>
      <div className='mb-5 bold-text'>Create new contact</div>
        <form onSubmit={onSubmit}>
        <div className="form-group mb-2">
          <label forHtml='first-name'>First name</label>
          <input
            className="form-control"
            aria-describedby="firstNameHelp"
            type="text"
            value={first_name}
            name="first_name"
            onChange={e => onChange(e)}
            />
        </div>
        <div className="form-group mb-2">
          <label htmlFor="exampleInputEmail1">Last name</label>
          <input
            className="form-control"
            aria-describedby="emailHelp"
            type="text"
            value={last_name}
            name="last_name"
            onChange={e => onChange(e)}
            />
        </div>
          <div className="form-group mb-2">
            <label htmlFor="exampleInputEmail1">Email</label>
            <input
              className="form-control"
              aria-describedby="emailHelp"
              type="email"
              value={email}
              name="email"
              onChange={e => onChange(e)}
              />
          </div>
          <div className="form-group mb-2">
            <label htmlFor="inlineFormInputGroup">Number</label>
            <div className='input-group'>
              <div className="input-group-prepend">
                <div className="input-group-text">+</div>
              </div>
            <input
              id="inlineFormInputGroup"
              type="number"
              className="form-control"
              value={number}
              name="number"
              onChange={e => onChange(e)}
              />
          </div>
          </div>

          <button type="submit" className="outline-del bold-text mt-2 mb-2 center crimson btn">Continue</button>
        </form>
      </div>
    </Fragment>
  )
}

export default NewContact
