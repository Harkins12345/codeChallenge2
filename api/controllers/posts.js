const Post = require('../models/Post');

async function show (req, res) {
    try {
        const post = await Post.findByAuthor(req.params.id);
        res.status(200).json(post)
    } catch (err) {
        res.status(404).json({err})
    }
}

async function create (req, res) {
    try {
        const date = new Date();
        const postData = req.body;
        postData['day'] = date.getDate() + 1
        postData['month'] = date.getMonth() + 1
        const post = await Post.create(postData);
        res.status(201) //.json(post)
    } catch (err) {
        res.status(422).json({err})
    }
}

module.exports = { show, create }
