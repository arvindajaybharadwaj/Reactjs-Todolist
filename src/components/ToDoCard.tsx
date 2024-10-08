interface toDoCardProps {
    taskId: string;
    task: string;
    handleDeleteTask: (index: number) => void;
    index: number;
} // type safety for passing props to ToDoCard component

export default function ToDoCard({taskId, task, handleDeleteTask, index}: toDoCardProps) {
    return(
        <div className="todo-card">
            <div className="main-task">
                <input type="checkbox" id={taskId} className="task-checkbox"></input>
                <label htmlFor={taskId} className="task-label">{task}</label>
            </div>
            <div className="trash-button-container">
                <button className="trash-button" onClick={() => {handleDeleteTask(index)}}>
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}