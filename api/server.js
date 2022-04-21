const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors('*'));
app.use(express.json());

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.get('/', (req, res) => res.send('Welcome to the library'));

module.exports = app