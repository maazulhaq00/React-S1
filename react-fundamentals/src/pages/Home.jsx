import StudentDetails from "../components/StudentDetails";

function Home() {
    // const batchCode = "2212E1"
    return ( 
        <>
        <StudentDetails name="Ali" age="12" batch="2212E1" phone="12345678" email="ali@gmail.com" />
        <StudentDetails name="Ahmed" age="12" batch="2212E1" phone="7461278" email="ahmed@gmail.com" />
        </>
     );
}

export default Home;