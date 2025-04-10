import { useState, useEffect } from "react";

function ReactUseEffect() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Component Rendered");
    }, [])

    useEffect(() => {
        console.log("count is " + count);
    }, [count])

    // console.log("Component Rendered");

    return (
        <>
            <h1>Hello</h1>

            <p>Count: {count}</p>

            <button onClick={() => {
                setCount(count + 1); console.log(count);
            }}>Inc</button>
        </>
    );
}

export default ReactUseEffect;