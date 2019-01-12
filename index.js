const express = require('express');
const bodyParser = require('body-parser');

// settings
const app = express();
const port = process.env.PORT || 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// routes
app.get('/', (req, res) => {
    res.send('Hi there! From Express');
});

// routes
const todoRoutes = require('./routes/todos');

// use routes
app.use('/api/todos', todoRoutes);

app.listen(port, () => {
    console.log(`Server up & running on port ${port}`);
});