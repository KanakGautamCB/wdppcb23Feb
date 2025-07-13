import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import colorRed from '../actions/colorActions/colorRed.action'
import colorBlue from '../actions/colorActions/colorBlue.action'
import colorGreen from '../actions/colorActions/colorGreen.action'
import colorBlack from '../actions/colorActions/colorBlack.action'

function Color() {

    const color = useSelector((state)=> state.colorReducer.color)
    const dispatch = useDispatch()

  return (
    <div>
       <p style={{color:color}}>This is current color</p> 
       <button onClick={()=>dispatch(colorRed())}>red</button>
       <button onClick={()=>dispatch(colorBlue())}>blue</button>
       <button onClick={()=>dispatch(colorGreen())}>green</button>
       <button onClick={()=>dispatch(colorBlack())}>black</button>
    </div>
    
  )
}

export default Color