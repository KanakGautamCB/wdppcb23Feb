import React from 'react'
import { useSelector, useDispatch } from 'react-redux'   
import {increment, decrement, reset} from '../slices/counterSlice/CounterSlice'

function Counter() {

    const cnt  = useSelector((state)=> state.counter.value)  
    const dispatch = useDispatch()

  return (
    <div>
        <p>Value of cnt is {cnt} </p>
        <button onClick={()=>dispatch(increment())}>Increment</button>
        <button onClick={()=>dispatch(decrement())}>Decrement</button>
        <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}

export default Counter