const mongoose = require('mongoose');


// Schema
const Schema = mongoose.Schema;
const ProjectSchema = new Schema({
    name: String,
    decription: String,
    chkMember:[],
    date: {
        type: String,
        default: Date.now()
    }
});

// Model
const Project = mongoose.model('Project', ProjectSchema);

module.exports =  Project;