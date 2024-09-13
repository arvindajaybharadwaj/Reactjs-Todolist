import ToDoCard from './ToDoCard';

export default function ToDoListContainer() {
    return(
        <div className="todo-list-container">
            <ToDoCard task_id="task1" task="Go to the gym" />
            <ToDoCard task_id="task2" task="Meditate for 10 mins" />
            <ToDoCard task_id="task3" task="Code Todo List" />
            <ToDoCard task_id="task4" task="4 hours of deep work" />
        </div>
    );
}