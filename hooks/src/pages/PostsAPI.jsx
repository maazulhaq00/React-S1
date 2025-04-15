import { useEffect, useState } from "react";

function PostsAPI() {

    const [posts, setPosts] = useState([])

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
        .catch((err) => console.log(err))
    }, []);


    return (<>
    <h1>Posts</h1>
    </>);
}

export default PostsAPI;