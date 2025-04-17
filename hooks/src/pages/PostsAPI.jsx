import { useEffect, useState } from "react";

function PostsAPI() {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
            .then((res) => res.json())
            .then((data) => setPosts(data))
            .catch((err) => console.log(err))
    }, []);


    return (<>
        <h1>Posts</h1>

        <div className="row row-cols-1 row-cols-md-4 g-4" >

            {
                posts.map((item) => {
                    return (
                        <div className="col" key={item.id}>
                            <div className="card">

                                <div className="card-body">
                                    <h5 className="card-title">{item.title}</h5>
                                    <p className="card-text">
                                        {item.body}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }



        </div>

    </>);
}

export default PostsAPI;