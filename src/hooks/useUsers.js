import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const fetchUsers = () => {
  return axios.get("http://localhost:4001/users")
}

const fetchPosts = () => {
  return axios.get("http://localhost:4001/users")
}

const addUser = (user) => {
  console.log(user)
  return axios.post("http://localhost:4001/users", user)
}

export const useUsers = (onSuccess, onError) => {
  return useQuery({
    queryKey: ['users'],
    queryFn: fetchUsers,
    onSuccess,
    onError,
  })
}



export const usePosts = (onSuccess, onError) => {
  return useQuery({
    queryKey: ['custom-query-hook'],
    queryFn: fetchPosts,
    onSuccess,
    onError,
  })
}


export const useAddUser = () => {
  const queryClient = useQueryClient()
  return useMutation({
    mutationFn: (user) => {
      console.log(user)
      return axios.post("http://localhost:4001/users", user)
    },
    onSuccess: (data, variables) => {
      // queryClient.invalidateQueries('rq-users', 'users')
      queryClient.setQueryData(['users'], (oldData) => {
        return {
          ...oldData,
          data: [...oldData.data, data.data]
        }
      })
    }
  })
}