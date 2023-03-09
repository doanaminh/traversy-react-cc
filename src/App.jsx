import { useState } from 'react'
import './App.css'
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import AddTask from './components/AddTask';

const  App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([]);

  // Add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = {id, ...task};
    setTasks([...tasks, newTask]);
  }

  // Delete Task
  const deleteTask = id => {
    setTasks(tasks.filter(el => el.id !== id));
  }

  // Toggle Reminder
  const toggleReminder = (id) => {
    console.log(id);
    setTasks(
      tasks.map(el => 
        el.id === id ? { ...el, reminder: !el.reminder } : el
      )
    )
  }

  return (
    <div className="container">
      <Header />
      <Button text={showAddTask ? 'Close' : 'Add'} color={showAddTask ? 'red' : 'green'} onAdd={() => setShowAddTask(!showAddTask)} />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} /> : <p>No Tasks</p>}
    </div>
  )
}

export default App
