import Task from './Task';

const Tasks = ({ tasks, onDelete, onToggle }) => {
    return (
        <>
            {tasks.map(el => {
                return <Task key={el.id} task={el} onDelete={onDelete} onToggle={onToggle} />
            }
            )}
        </>
    )
}

export default Tasks;