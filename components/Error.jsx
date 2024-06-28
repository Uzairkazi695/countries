import React from 'react'
import { useRouteError } from 'react-router-dom'

export default function Error() {
    const setError = useRouteError()
    console.log(setError);
  return (
    <h1>Error {setError.status}</h1>
  )
}
