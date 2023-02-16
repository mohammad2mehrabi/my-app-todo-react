import React, { useState } from 'react';
import './style.css';

function Header({ setTaskList, taskList }) {
    const [searchTerm, setSearchTerm] = useState('');
    const [errorMessage2, setErrorMessage2] = useState('');

    const handleSearch = (event) => {

        setSearchTerm(event.target.value);
        setTaskList(taskList.filter(task => task.text.toLowerCase().startsWith(event.target.value.toLowerCase())));

        
        if (event.target.value.length === 0) {
            setErrorMessage2('');
            setErrorMessage2('اینپوت خالی است.');

            setTaskList(taskList);
        }

        else if ((taskList.filter(task => task.text.toLowerCase().startsWith(event.target.value.toLowerCase()))).length === 0) {
            setErrorMessage2('');
            setErrorMessage2('کاری پیدا نشد!');
        }
    };

    return (
        <header className='header'>
            <h1>لیست کارها</h1>
            <input className='searchInput' type='text' placeholder='جستجو کار...' value={searchTerm} onChange={handleSearch} />
            {errorMessage2 && <p className='error-message2'>{errorMessage2}</p>}
        </header>
    )
}

export default Header;