import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import ListUsers from './common/ListUsers'

const PollingUsersPage = () => {

  //use query required 2 argumanets 1. unique key to identify the query 2. function that returns a promise
  // destructure value returned from the useQuery like loading, isRefetchhing, data etc
  // const results = useQuery('rq-users', () => {
  //   return axios.get("http://localhost:4001/users")
  // })

  // In the V5 useQuery requires only one argument that will be an object having queryKey as Array and queryFn

  const fetchUsers = () => {
    return axios.get("http://localhost:4001/users")
  }

  const { isLoading, data, isError, error, isFetching, status } = useQuery({
    queryKey: ['polling-users'],
    queryFn: fetchUsers,
    refetchInterval: 2000, // after every 2 secod it will refetch the data 
    refetchIntervalInBackground: true // to run refetch interval in background as well means when the app looses focus
  })

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      <ListUsers users={data?.data} />
    </div>
  )
}

export default PollingUsersPage
