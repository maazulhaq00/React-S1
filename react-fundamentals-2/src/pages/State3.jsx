import { useState } from "react";

function State3() {
    const [isLoginFormVisible, setIsLoginFormVisible] = useState(true);

    function handleFormToggle() {
        // if(isLoginFormVisible){
        //     setIsLoginFormVisible(false)
        // }
        // else{
        //     setIsLoginFormVisible(true)
        // }

        setIsLoginFormVisible(!isLoginFormVisible);
        console.log(isLoginFormVisible);
    }
    return (
        <>
            {
                isLoginFormVisible ?
                    <div>
                        <h1>Login</h1>
                        <input type="email" name="" id="" placeholder="Email Address" /> <br />
                        <input type="password" name="" id="" placeholder="Password" /> <br />
                        <button>Login</button>
                    </div> :
                    <div>
                        <h1>Sign up</h1>
                        <input type="text" name="" id="" placeholder="Fullname" /> <br />
                        <input type="email" name="" id="" placeholder="Email Address" /> <br />
                        <input type="password" name="" id="" placeholder="Password" /> <br />
                        <button>Sign Up</button>
                    </div>
            }
            <button onClick={handleFormToggle}>Switch to {isLoginFormVisible ? "Sign Up" : "Login" }</button>
        </>
    );
}
export default State3;