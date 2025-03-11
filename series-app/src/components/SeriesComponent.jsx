import seriesArr from "../data/seriesData.json"

function SeriesComponent() {

    return (
        <>
            <div>
                {
                    seriesArr.map((series) => {
                        return (
                            <div>
                                <img src={series.img_url} alt={series.name} width="40%" height="40%" />
                                <h1>{series.name}</h1>
                                <h3>Rating: {series.rating}</h3>
                                <p>{series.description}</p>
                                <p>Casts:{series.cast}</p>
                                <p>Genres{series.genre}</p>
                                <a href={series.watch_url} target="_blank">
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

export default SeriesComponent;