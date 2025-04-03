import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline } from "react-icons/md";


function TodoPage() {
    // let b1 = ["Sarah",  "Ali"];
    // let b2 = ["Ahmed", "Khalid"];

    // let b3 = [...b1, ...b2, "Hammad"]

    const [task, setTask] = useState("")

    const [tasksArr, setTasksArr] = useState([]);

    function handleInputChange(e) {

        setTask(e.target.value)
    }

    function handleAddButtonClick() {

        if (task == "") return;

        if (tasksArr.includes(task)) {
            setTask("");
            return
        }

        setTasksArr([...tasksArr, {taskName: task, isDone: false}])
        setTask("")

    }

    function handleDeleteBtnClick(task){
        // console.log(task);
        // console.log(tasksArr);

        let updatedTaskArr = tasksArr.filter((taskItem) => taskItem.taskName != task)
        
        setTasksArr(updatedTaskArr)
        
        // console.log(updatedTaskArr);
        
        
    }

    function handleClearAllBtnClick(){
        setTasksArr([]);
    }

    return (
        <>
            <input type="text" placeholder="Enter task to add" value={task} onChange={handleInputChange} />

            <button onClick={handleAddButtonClick}>Add Task</button>

            <ul>
                {
                    tasksArr.map((task, index) => <li key={index}>
                        {task.taskName}
                        <button>
                            <FaCheck />
                        </button>
                        <button onClick={() => handleDeleteBtnClick(task.taskName)}>
                            <MdDeleteOutline />
                        </button>

                    </li>)
                }
            </ul>

            {
                tasksArr.length > 0 ? <button onClick={handleClearAllBtnClick}>Clear All</button> : ""
            }

            
        </>
    );
}

export default TodoPage;