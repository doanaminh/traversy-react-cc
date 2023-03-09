import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Header from './components/Header';
import Button from './components/Button';
import Tasks from './components/Tasks';
import Task from './components/Task';
const  App = () => {
  const [count, setCount] = useState(0)
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

  return (
    <div className="container">
      <Header />
      <Button text='Add'/>
      <Tasks tasks={tasks}/>
    </div>
  )
}

export default App
