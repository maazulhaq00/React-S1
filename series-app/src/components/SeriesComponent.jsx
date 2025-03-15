import seriesArr from "../data/seriesData.json"
import SeriesCardComponent from "./SeriesCardComponent";
import './SeriesComponent.css'

function SeriesComponent() {

    return (
        <>
            <div className="series-container">
                {
                    seriesArr.map((series) => {
                        return (
                            <SeriesCardComponent data={series} />
                        )
                    })
                }
            </div>
        </>
    );
}

export default SeriesComponent;