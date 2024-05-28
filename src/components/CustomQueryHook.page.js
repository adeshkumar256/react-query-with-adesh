import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import { useUsers } from '../hooks/useUsers'
import { Link } from 'react-router-dom'

const CustomQueryHookPage = () => {

  const onSuccess = (data) => {
    console.log("Request is succesfully completed", data)
  }

  const onError = (error) => {
    console.log("Request is failed!!!", error)
  }

  const { isLoading, data, isError, error, isFetching, status, refetch } = useUsers(onSuccess, onError)

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    console.log(status, error.message)
    return <h2>{error.message}</h2>
  }
  return (
    <div>
      <button onClick={refetch}>{data ? "Refetch Users" : "Fetch Users"}</button>

      {data ? <>
        {
          data && data?.data.map(user => (
            <div key={user.id}>
              <Link to={`/users/${user.id}`}>{user.name}</Link>
            </div>
          ))
        }
      </> :
        <h2>Click on the fetch users button to load the users</h2>}
    </div>
  )
}

export default CustomQueryHookPage
