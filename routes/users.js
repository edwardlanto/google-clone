const router = require('express').Router();
let User = require('../models/users.model');

router.route('/').get((req, res) => {
    User.find()
    .then(user => res.json(user))
    .catch(err => res.status(400).json(`Error` + err));
});

router.route('/add').post((req, res ) => {
    console.log(`${req.body.username} user`);
    let username = req.body.username;
    const newUser = new User({username: username});

    newUser.save()
    .then(() => res.json('User Added'))
    .catch(err => res.status(400).json(`Error ` + err));
});

module.exports = router;