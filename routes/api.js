const express = require('express');

const router = express.Router();

const Users = require('../models/mUser');



// Routes Users
router.get('/users', (req, res) => {

    Users.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/users/save', (req, res) => {
    const data = req.body;

    const newUsers = new Users(data);

    newUsers.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        // Users
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
});


module.exports = router;