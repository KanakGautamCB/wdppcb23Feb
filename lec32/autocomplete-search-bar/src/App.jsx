import { useState } from 'react'

import './App.css'
import { useRef } from 'react'

function App() {
  const inputRef = useRef(null);
  const [searchResults, setSearchResults] = useState([]);
  const [showResults, setShowResults] = useState(false);


  const debounceWrapper= (fun) =>{
    let timer;
    return function(){
      clearTimeout(timer);
      timer=setTimeout(()=>{
        console.log("debounced function called")
        fun()
      }, 1000);
    }
  }
  
  
  const handleInputChange = async () => { 
    const inputValue = inputRef.current.value;

    if (inputValue.trim() === '') {
      setSearchResults([]);
      return;
    }
    console.log(inputValue)
    const response = await fetch(
      `https://dummyjson.com/products/search?q=${inputValue}`
    );
    const data = await response.json();
    setSearchResults(data.products);
  }


const debouncedInputhandler = debounceWrapper(handleInputChange);

  return (
    <div className='App'>
      <h1>Auto complete Search Bar</h1>
      <div className="container">
        <input 
          type="text" 
          placeholder='enter your products'
          className='search-box'
          ref={inputRef}
          onFocus={() => setShowResults(true)}
          onBlur={() => setShowResults(false)}
          onChange={debouncedInputhandler}
        />
        {showResults && 
        <div className="search-results-container">
          {
            searchResults.map((product,index)=>{
              return(
                <div className='search-result' key={index}>
                  <p>{product.title}</p>
                </div>
              )
            })
          }
        </div>}
      </div>
      
    </div>
  )
}

export default App
