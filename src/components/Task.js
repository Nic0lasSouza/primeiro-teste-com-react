import React from 'react';
import './Task.css'
import {CgClose} from 'react-icons/cg'
const Task = ({task, handleTaskClick, handleTaskDeletion }) => {
    return (
        <>
            <div className='task-container' style={task.completed ? {borderLeft: '15px solid blue'} : {borderLeft: '15px solid red'}}>
                <div className='task-title' onClick={()=> handleTaskClick(task.id)}>
                    {task.title}
                </div>
            <div className='buttons-container'>
                <button className='remove-task-button' onClick={() => handleTaskDeletion(task.id)}><CgClose/></button>
                <button className='see-task-details-button' onClick={}><CgClose/></button>
            </div>
            </div>
        </>
    );///voltar a assistir ás 01:06:04
    // return (<div className="task-container">{task.title}</div>);
}
 
export default Task;