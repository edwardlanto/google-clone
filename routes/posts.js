const router = require('express').Router();
let Post = require('../models/posts.model');

router.route('/').get((req, res) => {
    Post.find()
    .then(post => res.json(post))
    .catch(err => res.status(400).json(`Error` + err));
});

router.route('/post').post((req, res ) => {

});

module.exports = router;