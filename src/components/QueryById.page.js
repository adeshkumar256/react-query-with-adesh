import React from 'react'
import { useUser } from '../hooks/useUser'
import { useParams } from 'react-router'

const QueryByIdPage = () => {
  const { id } = useParams()
  const onSuccess = (data) => {
    console.log("Request is succesfully completed", data)
  }

  const onError = (error) => {
    console.log("Request is failed!!!", error)
  }

  const { isLoading, data: user, isError, error, isFetching, status } = useUser(id, onSuccess, onError)

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }
  if (isError) {
    console.log(status, error.message)
    return <h2>{error.message}</h2>
  }
  console.log(user)
  return (
    <div>
      <h2>User Details</h2>
      <h4>{user?.data?.name || "Enabled to fetch"}</h4>
    </div>
  )
}

export default QueryByIdPage
