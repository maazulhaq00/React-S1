function EventHandling() {

    function handleClick(event){
        
        console.log(event);
        console.log(event.target);

        alert(`Hello, Button Clicked`)
    }

    const handleInputChange = (event) => {
        console.log(event.target.value);
        // console.log("hello")
    }
    function handleClick2(name){
        
        console.log(event.target);
        
        console.log(`Hello ${name}, Button 2 Clicked`)
    }

    return ( 
        <>
        <input type="text" onChange={handleInputChange} />
        <button onClick={handleClick} >Click</button>

        <button onClick={() => handleClick2("Maaz") } >Click 2</button>
        </>
     );
}

export default EventHandling;