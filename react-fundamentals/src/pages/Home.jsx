import StudentDetails from "../components/StudentDetails";

function Home() {
    
    const studentsArr = [
        {
            name: "Muhammad Ali",
            age: 23,
            batch: "2212E1",
            phone: 1234567,
            email: "mali@gmail.com"
        },
        {
            name: "Muhammad Ahmed",
            age: 21,
            batch: "2212E1",
            phone: 1234568,
            email: "mahmed@gmail.com"
        },
        {
            name: "Muhammad Faizan",
            age: 11,
            batch: "2212E1",
            phone: 1234998,
            email: "mfaiz@gmail.com"
        },
        {
            name: "Abrish",
            age: 11,
            batch: "2212E1",
            phone: 1234111,
            email: "abrish@gmail.com"
        }
    
    ]

    return ( 
        <>
        {
            studentsArr.map((student)=>{

                return(
                    <StudentDetails details={student} />
                )

            })
        }
        {/* <StudentDetails details={students[0]} />
        <StudentDetails details={students[1]} />
        <StudentDetails details={students[2]} /> */}

        </>
     );
}

export default Home;