import { useState } from 'react'
import './App.css'
import { useEffect } from 'react';
import Card from './Card';
import { useRef } from 'react';

const PAGE_SIZE = 10;

function App() {

  const [products, setProducts] = useState([]); 
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState('');
  const inputRef = useRef(null);
  

  const fetchData = async () =>{
    const searchQuery = searchTerm ? `&q=${searchTerm}` : '';
    const res = await fetch(`https://dummyjson.com/products/search?limit=200${searchQuery}`);
    const data = await res.json();
    setProducts(data.products);
  }

  useEffect(()=>{
    fetchData();
  },[searchTerm])


  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const pageNumbers = [...Array(totalPages).keys()];
  const startIndex = currentPage * PAGE_SIZE;
  const endIndex = startIndex + PAGE_SIZE - 1;  


  const pageChangeHandler = (pN) =>{
    if(pN < 0 || pN >= totalPages) return;
    setCurrentPage(pN);   
  }

  const pageIncrementHandler = () =>{
    if(currentPage < totalPages - 1){
      setCurrentPage((prev) => prev + 1);
    }
  }

  const pageDecrementHandler = () =>{
    if(currentPage > 0){
      setCurrentPage((prev) => prev - 1);
    }
  }


  return (
    <div className='body-container'>
      <h1>Products</h1>
      <div className="search-box">
        <input type='text' placeholder='search products' className='search-input' ref={inputRef} /> 
        <button onClick={()=>{
          setSearchTerm(inputRef.current.value)
          setCurrentPage(0)
        }} 
          className='search-button'
        >Search</button>
      </div>
      <div className="pagination-container">
        <button 
          className='pagination-buttons'
          disabled={currentPage === 0}
          onClick={()=>pageDecrementHandler()}
        >left
        </button>
        {pageNumbers.map((pN)=>{
          return(
            <button
              className={`pagination-buttons ${currentPage === pN ? 'active' : ''}`}  
              key={pN}
              onClick={()=>pageChangeHandler(pN)} 
            >
              {pN}
            </button>
          )
        })}
        <button
          className='pagination-buttons'
          disabled={currentPage === totalPages - 1}
          onClick={()=>pageIncrementHandler()}  
        >right
        </button>
      </div>

      <div className="products-container">
        {
          products.slice(startIndex, endIndex ).map((product) => {
            return(
              <Card name={product.title} imageUrl={product.thumbnail}/>
            )
          }) 
        }
      </div>
      
    </div>
  )
}

export default App
