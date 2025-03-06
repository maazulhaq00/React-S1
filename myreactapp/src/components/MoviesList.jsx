import movies from "../data/movies.json"

function MoviesList() {

    return (
        <>
            <div>
                {
                    movies.map((movie) => {
                        return (
                            <div>
                                <img src={movie.img_url} alt={movie.name} width="40%" height="40%" />
                                <h1>{movie.name}</h1>
                                <h3>Rating: {movie.rating}</h3>
                                <p>{movie.description}</p>
                                <p>Casts:
                                    <ul>
                                        {
                                            movie.cast.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </p>
                                <p>Genres
                                    <ul>
                                        {
                                            movie.genre.map((item, index) => {
                                                return <li key={index}>{item}</li>
                                            })
                                        }
                                    </ul>
                                </p>
                                <a href={movie.watch_url} target="_blank">
                                    <button>Watch Now</button>
                                </a>
                                <br />
                                <br />
                            </div>
                        )
                    })
                }
            </div>
        </>
    );
}

export default MoviesList;