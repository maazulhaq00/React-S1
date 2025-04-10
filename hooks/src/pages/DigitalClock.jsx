import { useState, useEffect } from "react";
import './DigitalClock.css'

function DigitalClock() {

    // const [count, setCount] = useState(0);
    const [dateTime, setDateTime] = useState("")

    useEffect(() => {

        setInterval(() => {
            // setCount((prevCount) => prevCount + 1)

            let now = new Date();
            let formattedDate = now.toLocaleDateString();
            let formattedTime = now.toLocaleTimeString();

            setDateTime(`${formattedDate} - ${formattedTime}`)

        }, 1000);
    }, [])

    // I1 --> count 2 --> 1 sec -- > count 3
    // I2 --> 1 sec --> count 4

    return (
        <>
            <div className="digital-clock-container">
                <h1 className="digital-clock-heading">Digital Clock</h1>
                <p className="digital-clock-time">{dateTime}</p>
            </div>
        </>
    );
}

export default DigitalClock;