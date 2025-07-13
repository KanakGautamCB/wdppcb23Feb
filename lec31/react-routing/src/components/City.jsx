import React from 'react'
import { useParams } from 'react-router'

function City() {

    let params = useParams();
  return (
    <div>This is {params.city}</div>
  )
}

export default City