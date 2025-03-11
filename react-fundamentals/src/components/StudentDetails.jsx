function StudentDetails(props) {

    const {details} = props

    const {name, age, batch, phone, email} = details

    return (
        <>
        <div>
            <h1>Name: {name}</h1>
            <p>Age: {age}</p>
            <p>Batch Code: {batch}</p>
            <p>Phone: {phone}</p>
            <p>Email: {email}</p>
        </div>
        </>
        );
}

export default StudentDetails;