import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"
import { request } from "../components/utils/axios-utils"

const fetchUsers = () => {
  return request({ url: '/users' })
  // return axios.get("http://localhost:4001/users")
}

const fetchPosts = () => {
  return axios.get("http://localhost:4001/users")
}

const addUser = (user) => {
  console.log(user)
  return request({ url: '/users', method: 'post', data: user })
  // return axios.post("http://localhost:4001/users", user)
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

// useMutation({
//   mutationFn: updateTodo,
//   // When mutate is called:
//   onMutate: async (newTodo) => {
//     // Cancel any outgoing refetches
//     // (so they don't overwrite our optimistic update)
//     await queryClient.cancelQueries({ queryKey: ['todos'] })

//     // Snapshot the previous value
//     const previousTodos = queryClient.getQueryData(['todos'])

//     // Optimistically update to the new value
//     queryClient.setQueryData(['todos'], (old) => [...old, newTodo])

//     // Return a context object with the snapshotted value
//     return { previousTodos }
//   },
//   // If the mutation fails,
//   // use the context returned from onMutate to roll back
//   onError: (err, newTodo, context) => {
//     queryClient.setQueryData(['todos'], context.previousTodos)
//   },
//   // Always refetch after error or success:
//   onSettled: () => {
//     queryClient.invalidateQueries({ queryKey: ['todos'] })
//   },
// })