import React from 'react'
import { useContext } from 'react'
import DsaContext from '../../context/DsaContext'

function DsaCourse() {
    const {dsaCourse, setDsaCourse} = useContext(DsaContext)
  return (
    <div>
        <div>name: {dsaCourse.name}</div>
        <div>price: {dsaCourse.price}</div>
        <div>duration: {dsaCourse.duration}</div>   
    </div>
  )
}

export default DsaCourse