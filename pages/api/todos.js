// pages/api/todos.js
import dbConnect from '../../utils/dbConnect';
import Todo from '../../models/Todo';

dbConnect();

export default async function handler(req, res) {
    if (req.method === 'GET') {
        try {
            const todos = await Todo.find({}); // Retrieve all to-do items from the database
            return res.status(200).json(todos);
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    } else if (req.method === 'POST') {
        try {
            const { name, description } = req.body;
            const todo = new Todo({ name, description });
            await todo.save();
            return res.status(201).json(todo);
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    } else if (req.method === 'DELETE') {
        const { id } = req.query;
        try {
            const deletedTodo = await Todo.findByIdAndDelete(id);
            if (!deletedTodo) {
                return res.status(404).json({ error: 'To-do item not found' });
            }
            return res.status(200).json({ message: 'To-do item deleted successfully' });
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    } else if (req.method === 'PUT') {
        const { id } = req.query;
        try {
            const updatedTodo = await Todo.findByIdAndUpdate(id, { status: true }, { new: true });
            if (!updatedTodo) {
                return res.status(404).json({ error: 'To-do item not found' });
            }
            return res.status(200).json(updatedTodo);
        } catch (error) {
            return res.status(500).json({ error: 'Server error' });
        }
    }
}
