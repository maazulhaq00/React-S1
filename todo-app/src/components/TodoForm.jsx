import { useState } from "react";

function TodoForm({handleAddButtonClick}) {
    const [task, setTask] = useState("")

    function handleInputChange(e) {

        setTask(e.target.value)
    }

    return (<div>
        <input type="text" placeholder="Enter task to add" value={task} onChange={handleInputChange} />
        <button onClick={() => {
            handleAddButtonClick(task)
            setTask("")
            }}>Add Task</button>
    </div>);
}

export default TodoForm;