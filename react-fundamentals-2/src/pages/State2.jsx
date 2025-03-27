import { useState } from "react";

function State2() {

    // let b1 = ["Sarah",  "Ali"];
    // let b2 = ["Ahmed", "Khalid"];

    // let b3 = [...b1, ...b2, "Hammad"]

    const [task, setTask] = useState("")

    const [tasksArr, setTasksArr] = useState(["Task 01", "Task 02"]);

    function handleInputChange(e) {

        setTask(e.target.value)
    }

    function handleButtonClick() {

        setTasksArr([...tasksArr, task])
        setTask("")

    }

    return (
        <>
            <input type="text" placeholder="Enter task to add" value={task} onChange={handleInputChange} />

            <button onClick={handleButtonClick}>Add Task</button>

            <ul>
                {
                    tasksArr.map((task) => <li>{task}</li>)
                }
            </ul>
        </>
    );
}

export default State2;