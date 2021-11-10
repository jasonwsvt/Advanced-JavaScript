const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let todoSchema = new Schema(
	{ task: { type: String } },
	{ collection: 'todos' }
)

module.exports = mongoose.model('Todo', todoSchema)