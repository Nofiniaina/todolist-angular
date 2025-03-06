const mongoose = require('mongoose');

const TaskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    created_at: { type: Date, default: Date.now },
    due_date: { type: Date, required: false },
    completed: { type: Boolean, default: false }
});

module.exports = mongoose.model('Task', TaskSchema);