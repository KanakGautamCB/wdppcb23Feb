import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {changeBlack, changeBlue, changeRed, changeGreen } from '../slices/colorSlice/ColorSlice'

function Color() {

    const color = useSelector((state)=> state.color.color)
    const dispatch = useDispatch()

  return (
    <div>
       <p style={{color:color}}>This is current color</p> 
       <button onClick={()=>dispatch(changeRed())}>red</button>
       <button onClick={()=>dispatch(changeBlue())}>blue</button>
       <button onClick={()=>dispatch(changeGreen())}>green</button>
       <button onClick={()=>dispatch(changeBlack())}>black</button>
    </div>
    
  )
}

export default Color