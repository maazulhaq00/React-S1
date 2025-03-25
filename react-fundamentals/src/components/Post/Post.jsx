import { useState } from "react";
import LikeButton from "./LikeButton";

function Post() {

    const [like, setLike] = useState(0);

    function handleLikeButtonClick() {
        setLike(like + 1);
    }

    return (
        <>
            <div style={{ width: "400px", border: '1px solid gray', padding: '12px' }}>
                <img src="https://www.w3schools.com/w3css/img_lights.jpg" width={"100%"} />
                <h4>This is Post</h4>
                <p>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio culpa nobis consequatur, minima reprehenderit cum dolorum. Similique reprehenderit aut maxime. Ab doloribus pariatur saepe! Aut dolor repellat quibusdam recusandae.
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores optio culpa nobis consequatur, minima reprehenderit cum dolorum. Similique reprehenderit aut maxime. Ab doloribus pariatur saepe! Aut dolor repellat quibusdam recusandae.
                </p>

                <div>
                    <span>{like}</span>
                    <LikeButton onLikeButtonClick={handleLikeButtonClick} />
                </div>


            </div>

        </>
    );
}

export default Post;