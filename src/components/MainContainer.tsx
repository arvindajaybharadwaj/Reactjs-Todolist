import HeadingContainer from './HeadingContainer';
import ToDoListContainer from './ToDoListContainer';
import { useState } from 'react';

export default function MainContainer() {
    const [tasksArray, setTasksArray] = useState<string[]>([]); // initialize an empty array that contains all the tasks
    const [taskInput, setTaskInput] = useState(""); // holds the current task

    function handleAddTask(): void {
        const input = taskInput.trim();
        if (input) {
            setTasksArray([...tasksArray, input]); // creating a new array with input in it
            setTaskInput(""); // task input field is reset to an empty string
        } else {
            alert("Add a valid task");
        }
    }

    function handleDeleteTask(index: number): void {
        console.log(`Deleted Task ${index}`);
    }

    return(
        <div className="main-container">
            <HeadingContainer 
                taskInput = {taskInput}
                setTaskInput = {setTaskInput}
                handleAddTask = {handleAddTask}
            />
            <ToDoListContainer 
                tasksArray={tasksArray}
                handleDeleteTask={handleDeleteTask} 
            />
        </div>
    );
}