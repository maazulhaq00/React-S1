import './StudentDetails.css'

function StudentDetails(props) {

    const {details} = props

    const {name, age, batch, phone, email} = details

    return (
        <>
        <div className='details-comp'>
            <h1 className="color-warning">Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Batch Code: {batch}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
        </>
        );
}

export default StudentDetails;