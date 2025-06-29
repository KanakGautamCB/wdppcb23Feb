


function Movie(props){
    const {title,year} = props;

    return (    
        <div className="movie-list">
            <h2>{title}</h2>
            <p>{year}</p>
        </div>
    );
}

export default Movie;   