import './Card.css'

function Card(props) {
    
    const style1 = {
        fontFamily: 'cursive',
        backgroundColor: props.name =="Maaz Ul Haq" ? 'rgb(179, 229, 248)' : 'rgb(229, 187, 248)'
    }
    
    return (
        <>
            <div className='card-comp'>
                <p>----------------------------------</p>

                <h3 className="color-warning" style={style1} >Welcome, {props.name}</h3>

                <div>
                    {props.fields}
                </div>

                <div style={style1} >
                    {props.children}
                </div>

                <p>----------------------------------</p>
            </div>
        </>
    );
}

export default Card;