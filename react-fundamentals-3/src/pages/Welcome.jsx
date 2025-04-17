import { useParams } from "react-router-dom";

function Welcome() {

    const {username} = useParams()
    
    return (<>
        <div className="w-75 mx-auto my-5">

            <h2>Welcome {username}</h2>
        </div>
    </>);
}

export default Welcome;