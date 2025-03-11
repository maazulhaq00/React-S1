function Card(props) {
    return (
        <>

            <p>----------------------------------</p>

            <h3>Welcome, {props.name}</h3>

            <div>
                {props.fields}
            </div>
            
            <div>
                {props.children}
            </div>

            <p>----------------------------------</p>

        </>
    );
}

export default Card;