import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Counter from './Counter.jsx'
import Movie from './Movie.jsx'

const movieData = [
  {
    Title: "Inception",
    Year: "2010",
    Poster: "https://example.com/inception.jpg"
  },
  {
    Title: "Interstellar",
    Year: "2014",
    Poster: "https://example.com/interstellar.jpg"
  },
  {
    Title: "The Dark Knight",
    Year: "2008",
    Poster: "https://example.com/dark-knight.jpg"
  },
  {
    Title: "Pulp Fiction",
    Year: "1994",
    Poster: "https://example.com/pulp-fiction.jpg"
  },
  {
    Title: "The Shawshank Redemption",
    Year: "1994",
    Poster: "https://example.com/shawshank-redemption.jpg"
  } 
]

function App() {

  const movieList = movieData;  
  

  return (
    <div>
      {/* Looping */}
      {movieList.map((movie, index) => (
        <Movie  title={movie.Title} year={movie.Year} key={index} />
      ))}
    </div>
  )
}

export default App
