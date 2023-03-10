import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map((el, i) => {
                return <Task key={i} task={el} onDelete={onDelete} onToggle={onToggle} />
            }
            )}
        </>
    )
}

export default Tasks;