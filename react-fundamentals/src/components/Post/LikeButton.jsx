import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function LikeButton(props) {
    return (
        <>
            <button onClick={props.onLikeButtonClick}>
            👍
            </button>
        </>
    );
}

export default LikeButton;