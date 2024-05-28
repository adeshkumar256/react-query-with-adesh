import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import React from 'react'
import ListUsers from './common/ListUsers'
import { Button } from 'react-bootstrap'

const FetchingOnClickPage = () => {

  //use query required atleast 2 argumanets 1. unique key to identify the query 2. function that returns a promise

  // In the V5 useQuery requires only one argument that will be an object having queryKey as Array and queryFn

  const fetchUsers = () => {
    return axios.get("http://localhost:4001/users")
  }

  const onSuccess = (data) => {
    console.log("Request is succesfully completed", data)
  }

  const onError = (error) => {
    console.log("Request is failed!!!", error)
  }

  // here the property enabled: false will prevent the query to be called on component load
  // and refetch will be called on button click to refetch the data


  // onSuccess and onError properties are used to handle the success and errors respectively  

  const { isLoading, data, isError, error, isFetching, status, refetch } = useQuery({
    queryKey: ['on-click-fetch'],
    queryFn: fetchUsers,
    enabled: false,
    onSuccess,
    onError,
    select: (data) => {
      // select is used to transform the data 
      return data && data?.data.map((user, index) => (
        {
          sNo: index + 1,
          ...user
        }
      ))
    }
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
      <Button onClick={refetch}>{data ? "Refetch Users" : "Fetch Users"}</Button>
      {data ? <ListUsers users={data} /> :
        <h2>Click on the fetch users button to load the users</h2>}
    </div>
  )
}

export default FetchingOnClickPage
