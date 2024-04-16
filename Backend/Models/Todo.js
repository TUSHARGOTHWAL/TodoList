const mongoose  = require('mongoose');  // Import mongoose

const TodoSchema = new mongoose.Schema({  // Create a new schema
    task: {
        type: String,
        done: {
            type: Boolean,
            default: false
        
        }
    }
});
 
const TodoModel = mongoose.model('Todo', TodoSchema);  // Create a new model
module.exports = TodoModel;  // Export the model  