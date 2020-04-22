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

//  Update route
router.get('/users/edit/:id', (req, res) => {

    let id = req.params.id;
    Users.findById(id, function (err, user){
        res.json(user);
    });
});

//   update route
router.post('/users/edit/:id', (req, res) => {
    Users.findById(req.params.id, function(err, user) {
        if (!user)
            res.status(404).send("data is not found");
        else {
            console.log(user);
            //user.fullname = req.body.fullname;
            user.phone = req.body.phone;
            user.birthday = req.body.birthday;

            user.save().then(user => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});
//delete user
router.get('/users/delete/:id', (req, res) => {

    Users.findByIdAndRemove({_id: req.params.id}, function(err, user){
        if(err) res.json(err);
        else res.json('Successfully removed');
    });
});


module.exports = router;