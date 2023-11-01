"use client"
import React, { useState } from 'react';
import './TodoApp.css';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    const addTodo = () => {
        if (task) {
            setTodos([...todos, task]);
            setTask('');
        }
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const handleFormSubmit = (e) => {
        e.preventDefault();
        setTodos([...todos, { name, description }]);
        setShowForm(false);
        setName('');
        setDescription('');
    };

    return (
        <div className='container1'>
            <div className='container'>
                <h1>To-Do List</h1>
                <button className='add-button' onClick={() => setShowForm(!showForm)}>+ Add</button>
                {showForm && (
                    <form className='task-form' onSubmit={handleFormSubmit}>
                        <label>
                            Task Name:
                            <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
                        </label>
                        <label>
                            Task Description:
                            <input type="text" value={description} onChange={(e) => setDescription(e.target.value)} />
                        </label>
                        <button type="submit">Add Task</button>
                    </form>
                )}
                <ul className='task-list'>
                    {todos.map((todo, index) => (
                        <TodoItem key={index} todo={todo} onDelete={() => deleteTodo(index)} />
                    ))}
                </ul>
            </div>
        </div>
    );

}

export default TodoApp;
