import React, { useState } from 'react'

export default function AddUserForm({ handleSubmit }) {
  const [user, setUser] = useState({
    name: "",
    email: "",
    age: 1,
    designation: ""
  })
  return (
    <form onSubmit={(e) => {
      e.preventDefault()
      if (!user.name || !user.email || !user.designation) {
        alert("please fill mandatory fields!!!")
        return false
      }
      handleSubmit(user)
    }}>

      <label htmlFor='name'>Name</label>
      <input name='name' id='name' type='text' required value={user.name} onChange={(e) => setUser({ ...user, name: e.target.value })} /><br /><br />

      <label htmlFor='email'>Email</label>
      <input name='email' id='email' type='email' required value={user.email} onChange={(e) => setUser({ ...user, email: e.target.value })} /><br /><br />

      <label htmlFor='age'>Age</label>
      <input name='age' id='age' type='number' required min={1} value={user.age} onChange={(e) => setUser({ ...user, age: e.target.value })} /><br /><br />

      <label htmlFor='designation'>Designation</label>
      <input name='designation' id='designation' required type='text' value={user.designation} onChange={(e) => setUser({ ...user, designation: e.target.value })} /><br /><br />

      <button type='submit'>
        Add User
      </button>
    </form>
  )
}
