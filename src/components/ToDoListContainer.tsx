import ToDoCard from './ToDoCard';

interface toDoListContainerProps {
    tasksArray: string[];
}

export default function ToDoListContainer({tasksArray}: toDoListContainerProps) {
    return(
        <div className="todo-list-container">
            {tasksArray.map((task, index) => {
                return <ToDoCard key={index} taskId={`${task}${index}`} task={task} />;
            })}
        </div>
    );
}