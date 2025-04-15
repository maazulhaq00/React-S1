import { useState } from "react";

function EmployeesPage() {

    const [employee, setEmployee] = useState({
        fullname: "",
        designation: "",
        salary: ""
    })

    const [employeeArr, setEmployeeArr] = useState([]);

    function handleEmployeeInputChange(e) {
        let { name, value } = e.target;

        setEmployee({
            ...employee,
            [name]: value
        })
    }

    function handleAddBtnClick() {

        setEmployeeArr([...employeeArr, employee]);
        setEmployee({
            fullname: "",
            designation: "",
            salary: ""
        })

    }


    return (<>
        <div className="w-75 mx-auto my-3">

            <div>
                <h3>Create Employee</h3>
                <br />

                <div>

                    <div className="mb-3">
                        <label htmlFor="fullname" className="form-label">Full Name</label>
                        <input type="text" className="form-control" id="fullname" name="fullname" value={employee.fullname} onChange={handleEmployeeInputChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="designation" className="form-label">Designation</label>
                        <input type="text" className="form-control" id="designation" name="designation" value={employee.designation} onChange={handleEmployeeInputChange} />

                    </div>
                    <div className="mb-3">
                        <label htmlFor="salary" className="form-label">Salary</label>
                        <input type="text" className="form-control" id="salary" name="salary" value={employee.salary} onChange={handleEmployeeInputChange} />

                    </div>

                    <button className="btn btn-dark" onClick={handleAddBtnClick}>Add</button>


                </div>

            </div>

            <br />
            <div>
                <h3>Employees</h3><br />

                <table className="table">
                    <thead>
                        <tr>
                            <th scope="col">Full Name</th>
                            <th scope="col">Designation</th>
                            <th scope="col">Salary</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            employeeArr.map((item) => <tr>
                                <td>{item.fullname}</td>
                                <td>{item.designation}</td>
                                <td>{item.salary}</td>
                            </tr>)
                        }

                    </tbody>
                </table>

            </div>
        </div>


    </>);
}

export default EmployeesPage;