import { useState, useCallback } from 'react'
import Counter from './Counter';
import { useMemo } from 'react';
function App() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const resetCount = useCallback(() => {  
    setCount(0);
  },[]) 

  const calCubes = ()=>{
    let sum=0;
    for(let i=1;i<=count;i++){
      sum+= i*i*i;  
    }
    console.log('calCubes called');
    return sum;
  }

  const sum=useMemo(()=>calCubes(count), [count]);


  return (
    <div>
      <span>Counter is {count}</span>
      <br />
      <span>Sum of Cubes till counter is: {sum}</span>
      <br />

      <button onClick={()=>setCount(prev=>prev+1)}>increment</button>
      <button onClick={()=>setCount2(prev=>prev+1)}>increment2</button>
      <Counter resetCount={resetCount} />

    </div>
  )
}

export default App
