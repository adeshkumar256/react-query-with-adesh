import React from 'react'
import { useKeyFeatures } from '../hooks/useSIteInfo'
import KeyFeatures from './siteInfo/KeyFeatures'

const HomePage = () => {
  const { data, isLoading, isError, error, isFetching } = useKeyFeatures()

  if (isLoading || isFetching) {
    return <h2>Loading...</h2>
  }

  if (isError) {
    return <h2>{error.message}</h2>
  }

  return (
    <div>
      {data && <KeyFeatures
        keyFeatures={data?.data?.key_features}
        title={data?.data?.title}
        intro={data?.data?.intro}
        conclusion={data?.data?.conclusion}
        whyChoose={data?.data?.why_choose_react_query} />}
    </div>
  )
}

export default HomePage