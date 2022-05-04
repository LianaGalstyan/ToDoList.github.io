import { useState } from 'react';
import './css/ToDoForm.css'
function ToDoForm({ addTask }) {
    const [userInput, setUserInput] = useState('');

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput('')
    }

    const handleKeyPress = (e) => {
        if (e.key === "Enter") {
            handleSubmit(e)
        }
    }

    return (
        <form
            className='form'
            onSubmit={handleSubmit}>
            <input
                className='input'
                value={userInput}
                type='text'
                onChange={handleChange}
                onKeyDown={handleKeyPress}
                placeholder='Add your new todo . . .'
            />
            <button>Add</button>
        </form>
    )
}

export default ToDoForm;