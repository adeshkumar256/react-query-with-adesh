import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const fetchUsers = () => {
  return axios.get("http://localhost:4001/users")
}

const fetchPosts = () => {
  return axios.get("http://localhost:4001/users")
}

export const useUsers = (onSuccess, onError) => {
  return useQuery({
    queryKey: ['custom-query-hook'],
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