export default function ToDoCard() {
    return(
        <div className="todo-card">
            <input type="checkbox" id="task1" className="task-checkbox"></input>
            <label htmlFor="task1" className="task-label">To Do</label>
        </div>
    );
}