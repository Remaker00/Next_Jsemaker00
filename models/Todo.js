// models/Todo.js
import mongoose from 'mongoose';

const todoSchema = new mongoose.Schema({
  name: String,
  description: String,
});

export default mongoose.models.Todo || mongoose.model('Todo', todoSchema);
