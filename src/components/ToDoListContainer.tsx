import ToDoCard from './ToDoCard';

interface toDoListContainerProps {
    tasksArray: string[];
    handleDeleteTask: (index: number) => void;
}

export default function ToDoListContainer({tasksArray, handleDeleteTask}: toDoListContainerProps) {
    return(
        <div className="todo-list-container">
            {tasksArray.map((task, index) => {
                return <ToDoCard 
                    key={index} 
                    taskId={`${task}${index}`} 
                    task={task}
                    handleDeleteTask={handleDeleteTask}
                    index={index} 
                />;
            })}
        </div>
    );
}