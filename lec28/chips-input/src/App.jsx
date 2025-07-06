import { useState } from 'react'
import './App.css'
import { useRef } from 'react';
import Chip from './components/Chip';

function App() {
  const [chipData, setChipData] = useState([]);
  const inputRef = useRef(null);


  const addChipHandler = (e) =>{
    if( e.key == 'Enter' && inputRef.current.value.trim()!== ''){
      const newChip = inputRef.current.value.trim();
      setChipData((prev)=>[...prev,{name: newChip, index: prev.length}]);
      inputRef.current.value = '';
    }
  }

  const deleteChipHandler = (ind) => {
    setChipData((prev)=>prev.filter(((chip,index)=> index !== ind)));
  }

  return (
    <div className="App">
      {console.log('re-rendered',chipData)}
      <div className="container">
        <h1 className='heading'>Chips input</h1>
        <input className="chip-input-box"
          type="text" 
          name="" 
          id=""  
          placeholder='Type a chip'
          ref={inputRef}
          onKeyDown={(e)=>{addChipHandler(e)}}
        />
        <div className="chips-wrapper">
          {chipData.map((chip,index)=>{
            return(
              <Chip name={chip.name} index={chip.index} key={chip.index} deleteChip = {deleteChipHandler} />
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default App
