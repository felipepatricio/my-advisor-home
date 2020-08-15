import React from 'react'
import { useQuery } from '@apollo/react-hooks'

const Query = ({ children, query, id }) => {
  console.log('children', children)
  console.log('query', query)
  console.log('id', id)
  const { data, loading, error } = useQuery(query, {
    variables: { id }
  })

  if (loading) return <p>Loading ...</p>
  if (error) return <p>Error: {JSON.stringify(error)} </p>
  return children({ data })
}

export default Query;
