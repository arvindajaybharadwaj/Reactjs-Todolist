import HeadingContainer from './HeadingContainer';
import ToDoListContainer from './ToDoListContainer';
import { useState } from 'react';

export default function MainContainer() {
    const [tasksArray, setTasksArray] = useState([]); // initialize an empty array that contains all the tasks
    const [task, setTask] = useState(""); // holds the current task

    return(
        <div className="main-container">
            <HeadingContainer />
            <ToDoListContainer />
        </div>
    );
}