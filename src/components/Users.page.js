import axios from 'axios'
import React, { useEffect, useState } from 'react'
import ListUsers from './common/ListUsers'

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
  console.log(users)
  if (isLoading) {
    return <h2>Loading...</h2>
  }
  if (error) {
    return <h2>Error has occured</h2>
  }

  return (
    <>
      <ListUsers users={users && users} />
    </>
  )
}

export default UsersPage
