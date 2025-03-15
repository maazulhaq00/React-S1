function dataCardComponent({ data }) {
    return (
        <div>
            <img src={data.img_url} alt={data.name} />
            <div className="card-content">
                <h2>{data.name}</h2>

                <h4>Rating: <span className={`rating ${data.rating >= 8.5 ? 'popular' : 'average'}`} >{data.rating}</span> </h4>
                
                <p>{data.description}</p>
                <p>Casts:{
                    data.cast.map(
                        (member, index) =>
                            <span className="tag" key={index}>{member}</span>
                    )
                }</p>
                <p>Genres{data.genre.map(
                    (gen, index) =>
                        <span className="tag" key={index}>{gen}</span>)
                }</p>
                <a href={data.watch_url} target="_blank">
                    <button>Watch Now</button>
                </a>
            </div>
        </div>
    );
}

export default dataCardComponent;

// {data.rating >= 8.5 ? 'popular' : 'average'}