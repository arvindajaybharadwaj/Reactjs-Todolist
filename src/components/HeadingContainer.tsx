import Heading from './Heading';
import AddTaskButton from './AddTaskButton';
import InputTask from './InputTask';

interface headingContainerProps {
    taskInput: string;
    setTaskInput: (input:string) => void;
    handleAddTask: () => void;
}

export default function HeadingContainer({taskInput, setTaskInput, handleAddTask}: headingContainerProps) {
    return(
        <div className="heading-container">
            <Heading />
            <div className="task-input-container">
                <InputTask 
                    taskInput={taskInput}
                    setTaskInput={setTaskInput}
                />
                <AddTaskButton 
                    handleAddTask={handleAddTask}
                />
            </div>
        </div>
    );
}