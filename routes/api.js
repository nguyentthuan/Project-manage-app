const express = require('express');

const router = express.Router();

const Users = require('../models/mUser');
const Projects = require('../models/mProject');



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

//  get update user
router.get('/users/edit/:id', (req, res) => {

    let id = req.params.id;
    Users.findById(id, function (err, user){
        res.json(user);
    });
});

//   post update user
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

                   //PROJECTS
router.get('/projects', (req, res) => {

    Projects.find({  })
        .then((data) => {
            console.log('Data: ', data);
            res.json(data);
        })
        .catch((error) => {
            console.log('error: ', error);
        });
});

router.post('/projects/save', (req, res) => {
    const data = req.body;

    const newProject = new Projects(data);

    newProject.save((error) => {
        if (error) {
            res.status(500).json({ msg: 'Sorry, internal server errors' });
            return;
        }
        
        return res.json({
            msg: 'Your data has been saved!!!!!!'
        });
    });
}); 

// get update Project
router.get('/projects/edit/:id', (req, res) => {

    let id = req.params.id;
    Projects.findById(id, function (err, project){
        res.json(project);
    });
});

//   post update project
router.post('/projects/edit/:id', (req, res) => {
    Projects.findById(req.params.id, function(err, project) {
        if (!project)
            res.status(404).send("data is not found");
        else {
            console.log(project);
            project.name = req.body.name;
            project.decription = req.body.decription;
            project.chkMember = req.body.chkMember;

            project.save().then(project => {
                res.json('Update complete');
            })
                .catch(err => {
                    res.status(400).send("unable to update the database");
                });
        }
    });
});



module.exports = router;