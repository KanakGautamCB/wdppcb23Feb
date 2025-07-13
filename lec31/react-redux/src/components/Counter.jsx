import React from 'react'
import { useSelector, useDispatch } from 'react-redux'   
import incrementAction from '../actions/counterActions/increment.action'
import decrementAction from '../actions/counterActions/decrement.action'
import resetAction from '../actions/counterActions/reset.action'

function Counter() {

    const cnt  = useSelector((state)=> state.counterReducer.count)  
    const dispatch = useDispatch()

  return (
    <div>
        <p>Value of cnt is {cnt} </p>
        <button onClick={()=>dispatch(incrementAction())}>Increment</button>
        <button onClick={()=>dispatch(decrementAction())}>Decrement</button>
        <button onClick={()=>dispatch(resetAction())}>Reset</button>
    </div>
  )
}

export default Counter