function MovieSeries() {

    let name = "Stranger Things";
    let img_url = "http://localhost:5173/images/st.jpg";
    let rating = 8.7;
    let description = "A group of young friends witness supernatural forces and secret government exploits.";
    let cast = ["Winona Ryder", "David Harbour", "Millie Bobby Brown"];
    let genre = ["Drama", "Fantasy", "Horror"];
    let watch_url = "https://www.netflix.com/title/80057281";


    return (
        <>
            <div>
                <img src={img_url} alt={name} width="40%" height="40%" />
                <h1>{name}</h1>
                <h3>Rating: {rating}</h3>
                <p>{description}</p>
                <p>Casts:
                    <ul>
                        {
                            cast.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </p>
                <p>Genres
                    <ul>
                        {
                            genre.map((item, index) => {
                                return <li key={index}>{item}</li>
                            })
                        }
                    </ul>
                </p>
                <a href={watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </>
    );
}

export default MovieSeries;