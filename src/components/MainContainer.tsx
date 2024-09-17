import HeadingContainer from './HeadingContainer';
import ToDoListContainer from './ToDoListContainer';
import { useState } from 'react';

export default function MainContainer() {
    const [tasksArray, setTasksArray] = useState<string[]>([]); // initialize an empty array that contains all the tasks
    const [taskInput, setTaskInput] = useState(""); // holds the current task

    function handleAddTask(): void {
        const input = taskInput.trim();
        if (input && tasksArray.length < 4) {
            setTasksArray([...tasksArray, input]); // creating a new array with input in it
        } else if (tasksArray.length == 4) {
            alert("Complete tasks first to add more");
        } else {
            alert("Enter a valid task");
        }
        setTaskInput(""); // task input field is reset to an empty string
    }

    function handleDeleteTask(index: number): void {
        const filteredTasksArray: string[] = [];
        for (let i = 0; i < tasksArray.length; i++) {
            if (i != index) {
                filteredTasksArray.push(tasksArray[i]);
            }
        }
        setTasksArray([...filteredTasksArray]);
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