import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {

    const [loginDetails, setLoginDetails] = useState({
        username: '',
        password: ''
    })
    const [errorMessgae, setErrorMessage] = useState("");

    const navigate = useNavigate();
    function handleInputChange(e) {


        const { name, value } = e.target;

        setLoginDetails({
            ...loginDetails,
            [name]: value
        })

    }
    function handleFormSubmit() {
        if (loginDetails.username == "maazulhaq" && loginDetails.password == "maaz1234") {
            navigate(`/welcome/${loginDetails.username}`)
        }
        else {
            setErrorMessage("Incorrect Username or Password")
        }
    }
    return (<>
        <div className="w-75 mx-auto my-5">

            <p className="text-danger">
                {errorMessgae}
            </p>

            <input className="form-control" type="text" name="username" value={loginDetails.username} onChange={handleInputChange} placeholder="Username" /> <br />
            <input className="form-control" type="password" name="password" value={loginDetails.password} onChange={handleInputChange} placeholder="Password" /> <br />
            <button className="btn btn-dark" onClick={handleFormSubmit}>Login</button>
        </div>
    </>);
}

export default Login;