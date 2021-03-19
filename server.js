const express = require('express');
const app = express();


// Index route
app.get('/', (req, res) => res.send('Hi, I am from Azure VM'));

const PORT = process.env.PORT || 80;

app.listen(PORT, console.log(`Server started on port ${PORT}`));