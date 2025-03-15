function dataCardComponent({ data }) {
    return (
        <div>
            <img src={data.img_url} alt={data.name} />
            <div className="card-content">
                <h1>{data.name}</h1>
                <h3>Rating: {data.rating}</h3>
                <p>{data.description}</p>
                <p>Casts:{data.cast}</p>
                <p>Genres{data.genre}</p>
                <a href={data.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    );
}

export default dataCardComponent;