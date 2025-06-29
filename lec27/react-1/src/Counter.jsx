import { useState } from "react"

function Counter(){
    const [count,setCount] = useState(0)
  
    const incrementHandler = () =>{
      setCount(prevCount => prevCount + 1)
    }
  
    const decrementHandler = () =>{ 
      setCount(prevCount => prevCount - 1)
    }
  
    const resetHandler = () => {
      setCount(0)
    }
  
    return (
        <div>
            {count>=0 && <div>
            <h1>Counter</h1>
            <p>Count: {count}</p>
            <button onClick={incrementHandler} >Increment</button>
            <button onClick={decrementHandler}>Decrement</button>
            <button onClick={resetHandler}>Reset</button>
            </div>}
        </div>
        
    )
  }

export default Counter;