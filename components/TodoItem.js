// components/TodoItem.js
import React , { useState}from 'react';

function TodoItem({ todo, onDelete }) {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = async () => {
        setIsChecked(!isChecked);

        // Make an API call to update the status and delete the item if checked
        if (!isChecked) {
            const response = await fetch(`/api/todos?id=${todo._id}`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ status: true }),
            });
            if (response.ok) {
                onDelete(); // Trigger delete function on successful update
            } else {
                console.error('Failed to update status');
            }
        }
    };


    return (
        <li className='task-item'>
            <input
                type='checkbox'
                checked={isChecked}
                onChange={handleCheckboxChange}
            />
            <div className='items'>
                <h3>{todo.name} - </h3>
                <p>{todo.description}</p>
            </div>
            <button className='delete-button' onClick={onDelete}>Delete</button>
        </li>
    );
}

export default TodoItem;
