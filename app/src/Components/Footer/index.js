import React, { useState } from 'react';
import './style.css';

function Footer({ addTask, taskList }) {
    const [task, setTask] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleAccept = () => {
        if (!task) {
            setErrorMessage('این مقدار اجباری است.');
            return;
        }
        else if (taskList.some(t => t.text === task)) {
            setErrorMessage('این کار قبلا اضافه شده است.');
        }
        
        else {
            setErrorMessage('');
            addTask(task);
            setTask("");
        }
    };

    const handleCancel = () => {
        setTask("");
        setErrorMessage('');
      };

    return (
        <footer className='actions'>
            <div className='actions_top'>
                <input className='addInput' type='text' placeholder='اضافه کردن کار...' value={task} onChange={e => setTask(e.target.value)} />
                {errorMessage && <p className='error-message'>{errorMessage}</p>}
            </div>
            <div className='actions_bott'>
                <button className='btn cancel' onClick={handleCancel} >منصرف شدم</button>
                <button className='btn accept' onClick={handleAccept}>تایید</button>
            </div>
        </footer>
    )
}


export default Footer;