interface addTaskButtonProps {
    handleAddTask: () => void
}

export default function AddTaskButton({handleAddTask}: addTaskButtonProps) {
    return(
        <>
            <button className="add-task-button" onClick={handleAddTask}>Add Task</button>
        </>
    );
}