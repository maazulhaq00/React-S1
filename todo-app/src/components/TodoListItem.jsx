import { MdDeleteOutline, MdOutlineCheckBox, MdOutlineCheckBoxOutlineBlank } from "react-icons/md";

function TodoListItem({task, handleDeleteBtnClick, handleCheckBtnClick}) {

    // const {task, handleDeleteBtnClick, handleCheckBtnClick} = props

    return (<li>
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

    </li>);
}

export default TodoListItem;