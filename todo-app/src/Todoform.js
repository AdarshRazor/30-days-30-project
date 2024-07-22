import React, { useState } from 'react';
import './App.css';

function Todoform() {
    const [taskText, setTaskText] = useState('');  // for the new task input
    const [tasks, setTasks] = useState([
        {item: 'Complete React', status: 'complete'},
        {item: 'Learn React', status: 'incomplete'},
        {item: 'Complete JavaScript', status: 'complete'}
    ]);  // for the list of tasks

    const addTask = () => {
        if (taskText.trim() !== '') {
            setTasks([...tasks, {item: taskText, status: 'incomplete'}]);
            setTaskText('');
        }
    };

    const onchange = (e) => {
        setTaskText(e.target.value);
    };

    const toggletask = (index) => {
        setTasks(tasks.map((task, i) => 
            i === index ? { ...task, status: task.status === 'complete' ? 'incomplete' : 'complete' } : task
        ));
    };

    return (
        <>
            <input type='text' placeholder='Enter your task' value={taskText} onChange={onchange} />
            <button onClick={addTask}>Add Task</button>
            <hr />
            <h2 className='homesubtitle'>Items</h2>
            <div className='container listbox'>
                {tasks.map((task, index) => (
                    <div key={index} className='itemsinlist'>
                        <input type='checkbox' checked={task.status === 'complete'} onChange={() => toggletask(index)} />
                        <p className={task.status === 'complete' ? 'completed' : 'notcompleted'} onClick={() => toggletask(index)}>{task.item}</p>
                    </div>
                ))}
            </div>
        </>
    );
}

export default Todoform;
