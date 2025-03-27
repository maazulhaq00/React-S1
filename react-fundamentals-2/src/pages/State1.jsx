import { useState } from "react";

function State1() {

    const [name, setName] = useState("John");

    function handleNameInputChange(e){

        setName(e.target.value)
    }

    return (<>
    <input type="text" placeholder="Enter your name" value={name} onChange={handleNameInputChange} />

    <p>Welcome {name}</p>
    </>);
}

export default State1;