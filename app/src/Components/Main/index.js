import React, { useState } from 'react';
import './style.css';
import Footer from '../Footer';
import Header from '../Header';

const tasks = [
    { id: 1, text: 'کار 1' },
    { id: 2, text: 'کار 2' },
    { id: 3, text: 'کار 3' },
    { id: 4, text: 'کار 4' },
    { id: 5, text: 'کار 5' },
    { id: 6, text: 'خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی خیلی' },
    { id: 7, text: 'کار 7' },
    { id: 8, text: 'کار 8' },
    { id: 9, text: 'کار 9' },
    { id: 10, text: 'کار 10' },
];

function Main() {
    const [taskList, setTaskList] = useState(tasks);

    const handleDelete = (id) => {
        setTaskList(taskList.filter(task => task.id !== id)); };

    const addTask = (task) => {
        setTaskList([...taskList, { id: taskList.length + 1, text: task }]); };
    
    return (
        <> 
        <Header setTaskList={setTaskList} taskList={taskList}  />
        <main className='main'>
            {taskList.map(task => (
                <div key={task.id} className='item'>
                    <p className='text' title={task.text}>{task.text}</p>
                    <button className='x-btn' onClick={() => handleDelete(task.id)}>&#10006;</button>
                </div>
            ))}
            </main>
        <Footer addTask={addTask} taskList={taskList} />
        </>
    )
}

export default Main;