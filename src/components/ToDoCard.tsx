interface toDoCardProps {
    task_id: string;
    task: string;
} // type safety for passing props to ToDoCard component

export default function ToDoCard({task_id, task}: toDoCardProps) {
    return(
        <div className="todo-card">
            <div className="main-task">
                <input type="checkbox" id={task_id} className="task-checkbox"></input>
                <label htmlFor={task_id} className="task-label">{task}</label>
            </div>
            <div className="trash-button-container">
                <button className="trash-button">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}