import { Link } from "react-router-dom";


function Home() {
    return (<>

        <div className="w-75 mx-auto my-5">
            <h2>Home Page</h2>
            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis impedit hic id nemo quod autem vero mollitia qui, excepturi culpa quaerat repellendus eius nesciunt. Libero tenetur culpa nulla vel?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis impedit hic id nemo quod autem vero mollitia qui, excepturi culpa quaerat repellendus eius nesciunt. Libero tenetur culpa nulla vel?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis impedit hic id nemo quod autem vero mollitia qui, excepturi culpa quaerat repellendus eius nesciunt. Libero tenetur culpa nulla vel?Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ipsum corporis impedit hic id nemo quod autem vero mollitia qui, excepturi culpa quaerat repellendus eius nesciunt. Libero tenetur culpa nulla vel?</p>
            <p>For more information <Link to="/contact">Contact us</Link> </p>
        </div>
    </>);
}

export default Home;