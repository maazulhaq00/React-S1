import { useState } from "react";
import { FaCheck } from "react-icons/fa6";
import { MdDeleteOutline, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";
import TodoForm from "../components/TodoForm";


function TodoPage() {
    // let b1 = ["Sarah",  "Ali"];
    // let b2 = ["Ahmed", "Khalid"];

    // let b3 = [...b1, ...b2, "Hammad"]


    const [tasksArr, setTasksArr] = useState([]);

    function handleAddButtonClick(task) {

        if (task == "") return;

        if (tasksArr.find((taskItem) => taskItem.taskName == task )) {
            return
        }

        // console.log(tasksArr.find((taskItem) => taskItem.taskName == task ));
        

        setTasksArr([...tasksArr, { taskName: task, isDone: false }])

    }

    function handleDeleteBtnClick(task) {
        // console.log(task);
        // console.log(tasksArr);

        let updatedTaskArr = tasksArr.filter((taskItem) => taskItem.taskName != task)

        setTasksArr(updatedTaskArr)

        // console.log(updatedTaskArr);


    }

    function handleCheckBtnClick(task) {

        let updatedTaskArr = tasksArr.map((taskItem) => {

            if (taskItem.taskName == task) {
                return {
                    ...taskItem,
                    isDone: !taskItem.isDone
                }
            }
            else {
                return taskItem
            }

        })

        setTasksArr(updatedTaskArr)


    }

    function handleClearAllBtnClick() {
        setTasksArr([]);
    }

    return (
        <>
            <TodoForm handleAddButtonClick={handleAddButtonClick}  />

            <ul>
                {
                    tasksArr.map((task, index) => <li key={index}>
                        <span style={{ textDecoration: task.isDone ? 'line-through' : 'none' }} >
                            {task.taskName}
                        </span>
                        <button onClick={() => handleCheckBtnClick(task.taskName)}>
                            {
                                task.isDone ?
                                    <MdOutlineCheckBox /> :
                                    <MdOutlineCheckBoxOutlineBlank />

                            }
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