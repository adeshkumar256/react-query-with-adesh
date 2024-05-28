import { useQuery } from "@tanstack/react-query"
import axios from "axios"

const getKeyFeatures = () => {
  return axios.get('http://localhost:4001/siteInfo')
}
export const useKeyFeatures = () => {
  return useQuery({
    queryKey: ['site-info'],
    queryFn: getKeyFeatures,
    refetchOnMount: true,
  })
}