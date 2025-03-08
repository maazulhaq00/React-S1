function StudentDetails(props) {
    return (
        <>
        <div>
            <h1>Name: {props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Batch Code: {props.batch}</p>
            <p>Phone: {props.phone}</p>
            <p>Email: {props.email}</p>
        </div>
        </>
        );
}

export default StudentDetails;