import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import Task from './components/Task';
import AddTask from './components/AddTask';

const  App = () => {
  const [showAddTask, setShowAddTask] = useState(false);
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: 'Grocery shopping',
      time: 'March 3rd, 2023 at 02:00pm',
      reminder: false
  },
  {
      id: 2,
      text: 'Go to meeting',
      time: 'March 5th, 2023 at 01:00pm',
      reminder: true
  },
  {
      id: 3,
      text: 'Go climbing',
      time: 'March 10th, 2023 at 07:00pm',
      reminder: false
  },
  ])

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
