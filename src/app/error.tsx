
'use client'
import React, { useEffect } from 'react'

const Error = ({ error }: { error: Error }) => {
    useEffect(() => {
        console.error(error)
    },[error])
  return (
      <div>Something went wrong</div>
  )
}

export default Error;