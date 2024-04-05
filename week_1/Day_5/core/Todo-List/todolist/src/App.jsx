import { useState } from 'react';
import Display from './components/Display';
import Tasks from './components/Tasks';
import './App.css';

function App() {
  const task = [{
    title: "Get MERN black belt.",
    status: false,
  },
  {
    title: "Get Python black belt.",
    status: false,
  },
  {
    title: "Get Java black belt.",
    status: false,
  },
  ]
  const [tasks, setTask]=useState(task)
  const deleteTasks = (taskId)=>{
    const updatedTasks = tasks.filter((onePost, index)=>{
      return index !== taskId;
    });
    setTask(updatedTasks)
  }
  const readTasks=(taskId)=>{
const copyTasks=[...tasks];
copyTasks[taskId].status= !copyTasks[taskId].status;
setTask(copyTasks)
  }
  return (
    <div className="App">
      <Tasks tasks={tasks} setTask={setTask} />
      <Display tasks={tasks} deleteTasks={deleteTasks} readTasks={readTasks} />
    </div>
  );
}

export default App;