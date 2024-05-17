import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const UsersRQPage = () => {

  //use query atleast required 2 argumanets 1. unique key to identify the query 2. function that returns a promise
  // destructure value returned from the useQuery like loading, isRefetchhing, data etc
  // const results = useQuery('rq-users', () => {
  //   return axios.get("http://localhost:4001/users")
  // })

  // In the V5 useQuery requires only one argument that will be an object having queryKey as Array and queryFn

  const fetchUsers = () => {
    return axios.get("http://localhost:4001/users")
  }

  const { isLoading, data, isError, error, isFetching, status } = useQuery({
    queryKey: ['rq-users'],
    queryFn: fetchUsers,
    staleTime: 1000,
    refetchOnMount: true, // to decide whether to refetch on component mount if false it will show old data until refreshed
    refetchOnWindowFocus: true // in case window loose focus query will be refetched after focusing again
  })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    console.log(status, error.message)
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <ul>
        {
          data?.data.map(user => (
            <li key={user.id}>{user.name}</li>
          ))
        }
      </ul>
    </div>
  )
}

export default UsersRQPage
