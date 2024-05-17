import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UsersPage = () => {
  const [isLoading, setLoading] = useState(true)
  const [users, setUsers] = useState(null)
  const [error, setError] = useState(null)

  useEffect(() => {
    getUsers()
  })

  const getUsers = () => {
    axios.get("http://localhost:4001/users")
      .then((res) => {
        setUsers(res.data)
        setLoading(false)
      })
      .catch(error => {
        console.log(error)
        setError("Something went wrong")
      })
  }

  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error has occured</h2>
  }

  return (
    <div>
      <ul>
        {
          users && users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UsersPage
