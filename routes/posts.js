const router = require('express').Router();
let Post = require('../models/posts.model');

router.route('/').get((req, res) => {
    // Add functionality to save posts for later read
});

router.route('/post').post((req, res ) => {

});

module.exports = router;