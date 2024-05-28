import React, { useState } from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function PaginatedQueriesPage() {
  const perPage = 2
  const [page, setPage] = useState(1)
  const fetchColors = (pageNumber) => {
    return axios.get(`http://localhost:4001/colors?_limit=${perPage}&_page=${parseInt(pageNumber)}`)
  }

  const { data, isLoading, isFetching } = useQuery({
    queryKey: ['colors', parseInt(page)],
    queryFn: () => fetchColors(page),
    keepPreviousData: true,

  })

  if (isLoading || isFetching) {
    return <h2>Loading</h2>
  }
  const totalPage = data?.data?.length > perPage ? data?.data?.length / perPage : 1
  return (
    <div>
      {
        data?.data?.map(color => (
          <p key={color.id} style={{ color: color.name }}>{color.name}</p>
        ))
      }
      <select onChange={(e) => setPage(e.target.value)} value={page}>
        <option value={1}>1</option>
        <option value={2}>2</option>
        <option value={3}>3</option>
        <option value={4}>4</option>
      </select>
    </div>
  )
}
