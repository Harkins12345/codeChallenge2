const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors('*'));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

const postRoutes = require('./routes/posts');
app.use('/posts', postRoutes);

app.get('/', (req, res) => res.sendFile('index.html'));

module.exports = app