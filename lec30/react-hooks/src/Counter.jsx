import React, {memo} from 'react';
const Counter = memo((props) => {

    const {resetCount} = props; 

  return (
    <div>
    {console.log('Counter component re-rendered')}
      <button onClick={resetCount}>Reset Counter</button>
    </div>
  );
})

export default Counter;