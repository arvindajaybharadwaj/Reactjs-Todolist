import ToDoCard from './ToDoCard';

interface toDoListContainerProps {
    tasksArray: string[];
}

export default function ToDoListContainer({tasksArray}: toDoListContainerProps) {

    const taskIndex = tasksArray.length - 1;
    const taskName = tasksArray[tasksArray.length - 1];

    const taskId = `${taskName}${taskIndex}`;

    return(
        <div className="todo-list-container">
            {tasksArray.map((_, index) => {
                return <ToDoCard key={index} taskId={taskId} taskName={taskName} />;
            })}
        </div>
    );
}