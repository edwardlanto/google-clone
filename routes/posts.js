const router = require('express').Router();
let Post = require('../models/posts.model');

router.route('/').get((req, res) => {
    Post.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error` + err));
});

router.route('/add').post((req, res ) => {
    console.log(`${req.body.username} user`);
    let username = req.body.username;
    const newPost = new Post({username: username});

    newPost.save()
    .then(() => res.json('Post Added'))
    .catch(err => res.status(400).json(`Error ` + err));
});

module.exports = router;