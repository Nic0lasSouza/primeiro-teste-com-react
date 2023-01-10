import React from 'react';
import './Task.css'
const Task = ({task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <div className='task-container' style={task.completed ? {borderLeft: '15px solid blue'} : {borderLeft: '15px solid red'}}>
            <div className='task-title' onClick={()=> handleTaskClick(task.id)}>
                {task.title}
            </div>
            <div className='buttons-container'>
                <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}>X</button>
            </div>
        </div>
    );
    // return (<div className="task-container">{task.title}</div>);
}
 
export default Task;