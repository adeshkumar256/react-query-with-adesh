import { useQuery, useQueryClient } from "@tanstack/react-query"
import axios from "axios"

const fetchUser = (id) => {
  return axios.patch(`http://localhost:4001/users/${id}`)
}

export const useUser = (userId, onSuccess, onError) => {
  const queryClient = useQueryClient()
  return useQuery({
    queryKey: ['user', parseInt(userId)],
    queryFn: () => fetchUser(userId),
    onSuccess,
    onError,
    initialData: () => {
      const user = queryClient.getQueryData('users')?.data?.find(user => user.id === parseInt(userId))
      if (user) {
        return {
          data: user
        }
      } else {
        return undefined
      }
    }
  })
}
