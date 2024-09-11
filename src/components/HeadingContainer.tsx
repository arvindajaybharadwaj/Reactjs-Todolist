import Heading from './Heading';
import AddTaskButton from './AddTaskButton';
import InputTask from './InputTask';

export default function HeadingContainer() {
    return(
        <div className="heading-container">
            <Heading />
            <div className="task-input-container">
                <InputTask />
                <AddTaskButton />
            </div>
        </div>
    );
}