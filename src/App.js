import React, { useState } from 'react';
import {v4 as uuidv4} from 'uuid';

import './App.css';

import Header from './components/Header';
import AddTask from './components/AddTask';
import Tasks from './components/Tasks';

const App = () => {
  // let message = "Hello word"
  const [tasks, setTasks] = useState([
    {
      id:'1',
      title: 'Estudar programação',
      completed : false,
    },
    {
      id:'2',
      title: 'Ler Livros',
      completed: true,
    },
  ]);
  const handleTaskClick = (tasksId) =>{
    const newTask = tasks.map(task =>{
      if (task.id === tasksId) return{... task, completed: ! task.completed}
      return task;
    })
    setTasks(newTask)
  };
  const handleTaskAddition = (tasksTitle) =>{
    const newTask = [... tasks,{
      title: tasksTitle,
      id: uuidv4(),
      completed: false,
    }];

    setTasks(newTask);
  };

  const handleTaskDeletion = (tasksId) =>{
    const newTasks = tasks.filter(task => task.id !== tasksId)
    setTasks(newTasks)
  }
  return (
    <>
    <div className="container">
      <Header />
      <AddTask handleTaskAddition={handleTaskAddition}/>
      <Tasks tasks={tasks} handleTaskClick={handleTaskClick} handleTaskDeletion = {handleTaskDeletion}/>
    </div>

    </>
  )
};
export default App;