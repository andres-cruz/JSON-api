const express = require('express');


// settings
const app = express();
const port = process.env.PORT || 3000;

// routes
app.get('/', (req, res) => {
    res.send('Hi there! From Express');
});

app.listen(port, () => {
    console.log(`Server up & running on port ${port}`);
});