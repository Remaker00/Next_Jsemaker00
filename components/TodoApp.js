"use client"
import React, { useState, useEffect } from 'react';
import './TodoApp.css';
import TodoItem from './TodoItem';

function TodoApp() {
    const [todos, setTodos] = useState([]);
    const [task, setTask] = useState('');
    const [showForm, setShowForm] = useState(false);
    const [name, setName] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        const fetchTodos = async () => {
            try {
                const response = await fetch('/api/todos', {
                    method: 'GET',
                });
                if (response.ok) {
                    const data = await response.json();
                    setTodos(data);
                } else {
                    console.error('Failed to fetch to-do items');
                }
            } catch (error) {
                console.error('Server error:', error);
            }
        };

        fetchTodos();
    }, []);


    const handleFormSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/todos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, description }),
            });
            if (response.ok) {
                const newTodo = await response.json();
                setTodos([...todos, newTodo]);
                setShowForm(false);
                setName('');
                setDescription('');
            } else {
                console.error('Failed to add task');
            }
        } catch (error) {
            console.error('Server error:', error);
        }
    };

    const deleteTodo = async (id) => {
        try {
            const response = await fetch(`/api/todos?id=${id}`, {
                method: 'DELETE',
            });
            if (response.ok) {
                const updatedTodos = todos.filter((todo) => todo._id !== id);
                setTodos(updatedTodos);
            } else {
                console.error('Failed to delete to-do item');
            }
        } catch (error) {
            console.error('Server error:', error);
        }
    };


    return (
        <div className='container1'>
            <div className='container'>
                <h1>To-Do List</h1>
                <ul className='task-list'>
                    {todos.map((todo) => (
                        <TodoItem key={todo._id} todo={todo} onDelete={() => deleteTodo(todo._id)} />
                    ))}
                </ul>
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
            </div>
        </div>
    );
}

export default TodoApp;
