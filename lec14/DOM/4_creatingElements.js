let newMovie = document.createElement('li')
newMovie.innerText='SpiderMan Homecoming'
newMovie.classList.add('movie-name')

let movieList = document.querySelector('.movie-list')

setTimeout(()=>{
    movieList.append(newMovie)
    let movies = document.querySelectorAll('.movie-name')
    console.log(movies)
},2000)

