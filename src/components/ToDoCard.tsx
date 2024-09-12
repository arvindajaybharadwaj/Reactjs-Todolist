export default function ToDoCard() {
    return(
        <div className="todo-card">
            <div className="main-task">
                <input type="checkbox" id="task1" className="task-checkbox"></input>
                <label htmlFor="task1" className="task-label">To Do</label>
            </div>
            <div className="trash-button-container">
                <button className="trash-button">
                    <i className="fa-solid fa-trash"></i>
                </button>
            </div>
        </div>
    );
}