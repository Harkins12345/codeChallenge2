const Post = require('../models/Post');

async function show(req, res) {
    try {
        const post = await Post.findPost(req.params.id);
        if (post !== undefined) {
            res.render('post', post)
        } else {
            res.status(404).send('Error post not found')
        }
    } catch (err) {
        res.status(404).json({ err })
    }
}

async function create(req, res) {
    try {
        const postData = req.body;
        const post = await Post.create(postData);
        res.status(201).send(post);
    } catch (err) {
        res.status(422).json({ err });
    }
}

async function error(req, res) {
    res.status(404).send('Error page not found');
}

module.exports = { show, create, error }
