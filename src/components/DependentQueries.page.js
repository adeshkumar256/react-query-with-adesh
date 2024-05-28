import React from 'react'
import axios from 'axios'
import { useQuery } from '@tanstack/react-query'

export default function DependentQueriesPage({ userId }) {
  const fetchUserByuserId = (userId) => {
    return axios.get(`http://localhost:4001/users/${userId}`)
  }

  const fetchProfileByProfileId = (profileId) => {
    return axios.get(`http://localhost:4001/profile/${profileId}`)

  }
  const { data: user, isLoading: isLoadingUser, isFetching: isFetchingUserData } = useQuery({
    queryKey: ['user', userId],
    queryFn: () => fetchUserByuserId(userId)
  })

  const profileId = user?.data.profileId

  const { data: profile, isLoading: isLoadingProfile, isFetching: isFetchingProfileData } = useQuery({
    queryKey: ['profile', profileId],
    queryFn: () => fetchProfileByProfileId(profileId),
    enabled: !!profileId
  })

  if (isLoadingUser || isFetchingUserData) {
    return <h2>Loading User Data</h2>
  }

  if (isLoadingProfile || isFetchingProfileData) {
    return <h2>Loading User Profile Data</h2>
  }
  return (
    <div>
      {
        profile?.data?.skills.map(skill => (
          <p key={skill}>{skill}</p>
        ))
      }
    </div>
  )
}
