interface toDoCardProps {
    taskId: string;
    taskName: string;
} // type safety for passing props to ToDoCard component

export default function ToDoCard({taskId, taskName}: toDoCardProps) {
    return(
        <div className="todo-card">
            <div className="main-task">
                <input type="checkbox" id={taskId} className="task-checkbox"></input>
                <label htmlFor={taskId} className="task-label">{taskName}</label>
            </div>
            <div className="trash-button-container">
                <button className="trash-button">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}