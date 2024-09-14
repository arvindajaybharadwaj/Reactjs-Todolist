interface inputTaskProps {
    taskInput: string;
    setTaskInput: (input: string) => void;
}

export default function InputTask({taskInput, setTaskInput}: inputTaskProps) {

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTaskInput(event.target.value);
    }

    return(
        <>
            <input 
                type="text" 
                value={taskInput} 
                onChange={handleInputChange}
                placeholder="Add new task" 
                className="input-task"
            >
            </input>
        </>
    );
}