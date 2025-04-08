import { useState } from "react";
import TodoForm from "../components/TodoForm";
import TodoListItem from "../components/TodoListItem";


function TodoPage() {
    // let b1 = ["Sarah",  "Ali"];
    // let b2 = ["Ahmed", "Khalid"];

    // let b3 = [...b1, ...b2, "Hammad"]

    const [tasksArr, setTasksArr] = useState(() => {
        let taskData = JSON.parse(localStorage.getItem("TodoArr"))
        if(!taskData) {
            return [];
        }
        else{
            return taskData
        }
    });

    function handleAddButtonClick(task) {

        if (task == "") return;

        if (tasksArr.find((taskItem) => taskItem.taskName == task )) {
            return
        }

        // console.log(tasksArr.find((taskItem) => taskItem.taskName == task ));
        

        setTasksArr([...tasksArr, { taskName: task, isDone: false }])

    }

    // console.log("TODO PAGE RENDERED AGAIN");
    localStorage.setItem("TodoArr", JSON.stringify(tasksArr))
    

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
                    tasksArr.map((task, index) => <TodoListItem key={index} task={task} handleDeleteBtnClick={handleDeleteBtnClick} handleCheckBtnClick={handleCheckBtnClick} /> )
                }
            </ul>

            {
                tasksArr.length > 0 ? <button onClick={handleClearAllBtnClick}>Clear All</button> : ""
            }


        </>
    );
}

export default TodoPage;