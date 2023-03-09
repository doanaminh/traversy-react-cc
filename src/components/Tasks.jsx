import { useState } from 'react';
import { FaThinkPeaks } from 'react-icons/fa';
import Task from './Task';

const Tasks = ({ tasks }) => {
    return (
        <>
            {tasks.map(el => 
                <Task key={el.id} task={tasks} />
            )}
        </>
    )
}

export default Tasks;