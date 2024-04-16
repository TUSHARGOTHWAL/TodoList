const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const TodoModel = require('./Models/Todo');
const port = 3000;

require('dotenv').config();




mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log('MongoDB connected...'))
    .catch(err => console.log(err));

app.use(cors());
app.use(express.json());



app.get('/', (req, res) => {
    TodoModel.find().then(result => res.json(result)).catch(err => res.json(err));
});


app.post('/create', (req, res) => {
    const task = req.body.task;
    TodoModel.create({ task }).then((result) => { res.json(result).catch(err => res.json(err)) });
    res.send('Data received');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});


