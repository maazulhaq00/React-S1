import { useState } from "react";

function Counter() {

    // let count = 0
    const [count, setCount] = useState(0)

    const handleClick = (operation) => {
        // count++
        if(operation == "Inc"){
            setCount(count + 1)
        }
        else {
            setCount(count-1)
        }

        console.log(count);
    }

    return ( 
        <>
        <div>
            <h3>Counter</h3>

            <p>Count: {count}</p>

            <button onClick={() => handleClick("Inc")}>+</button>
            <button onClick={() => handleClick("Dec")}>-</button>
        </div>
        </>
     );
}

export default Counter;