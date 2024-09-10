import HeadingContainer from './HeadingContainer';
import ToDoListContainer from './ToDoListContainer';

export default function MainContainer() {
    return(
        <div className="main-container">
            <HeadingContainer />
            <ToDoListContainer />
        </div>
    );
}